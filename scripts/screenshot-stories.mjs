import { chromium } from 'playwright';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const BASE = 'http://localhost:6006';
const TIMEOUT = 120_000;

const stories = [
  { id: 'blocks-universal--hero-identity',    file: 'hero-identity-block' },
  { id: 'blocks-universal--contact-location', file: 'contact-location-card' },
  { id: 'blocks-universal--amenities',        file: 'amenity-grid' },
  { id: 'blocks-universal--booking-summary',  file: 'booking-summary-card' },
  { id: 'blocks-universal--gallery',          file: 'gallery-grid' },
  { id: 'blocks-universal--testimonials',     file: 'testimonial-strip' },
  { id: 'blocks-universal--call-to-action',   file: 'cta-section' },
  { id: 'blocks-universal--footer',           file: 'footer-block' },
];

async function waitForServer(url, timeout) {
  const deadline = Date.now() + timeout;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // not ready yet
    }
    await new Promise(r => setTimeout(r, 1000));
  }
  throw new Error(`Server at ${url} did not become ready within ${timeout}ms`);
}

console.log('Starting Storybook dev server…');
const sb = spawn('npm', ['run', 'storybook', '--', '--ci'], {
  cwd: ROOT,
  shell: true,
  stdio: ['ignore', 'pipe', 'pipe'],
});

sb.stdout.on('data', d => process.stdout.write(d));
sb.stderr.on('data', d => process.stderr.write(d));

try {
  console.log('Waiting for Storybook to be ready at', BASE);
  await waitForServer(BASE, TIMEOUT);
  console.log('Storybook is ready.\n');

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
  });

  for (const story of stories) {
    const page = await context.newPage();
    const url = `${BASE}/iframe.html?id=${story.id}&viewMode=story`;
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30_000 });
    // Let images fully paint
    await page.waitForTimeout(800);

    const outPath = resolve(ROOT, 'docs', 'images', `${story.file}.png`);
    await page.screenshot({ path: outPath, fullPage: true });
    console.log(`✓  docs/images/${story.file}.png`);
    await page.close();
  }

  await browser.close();
  console.log('\nAll screenshots saved to docs/images/');
} finally {
  sb.kill('SIGTERM');
}
