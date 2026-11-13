import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("exports the academic CV as a complete static page", async () => {
  const html = await readFile(new URL("../dist/client/index.html", import.meta.url), "utf8");

  assert.match(html, /<title>Saqib Mehdi \| GNSS &amp; Urban Atmospheric Sensing<\/title>/i);
  assert.match(html, /<h1>Saqib Mehdi<\/h1>/i);
  assert.match(html, /href="#home"[^>]*>\s*About\s*</);
  assert.match(html, /href="#selected-research"[^>]*>Work<\/a>/);
  assert.match(html, /href="#software"[^>]*>Software &amp; IP<\/a>/);
  assert.match(html, /href="#visitors"[^>]*>Visitors<\/a>/);
  assert.doesNotMatch(html, /Explore GNSS RayLab/i);
  assert.doesNotMatch(html, /aria-label="Core research areas"/i);
  assert.match(html, /id="publications"/i);
  assert.match(html, /id="software"/i);
  assert.match(html, />Software &amp; Intellectual Property</i);
  assert.match(html, /GNSS RayLab/i);
  assert.match(html, /23 October 2026/i);
  assert.match(html, /id="visitors"/i);
  assert.match(html, /Loading visitor map/i);
  assert.match(html, /mapmyvisitors\.com\/web\/1c9gj/i);
  assert.match(html, /id="experience"/i);
  assert.match(html, /id="teaching"/i);
  assert.match(html, /https:\/\/saqibmehdi\.github\.io\/og\.png/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|Building your site/i);
});

test("includes the files required by GitHub Pages", async () => {
  const [config, workflow, layout] = await Promise.all([
    readFile(new URL("../next.config.ts", import.meta.url), "utf8"),
    readFile(new URL("../.github/workflows/deploy-pages.yml", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(config, /output:\s*["']export["']/);
  assert.match(workflow, /actions\/upload-pages-artifact@v4/);
  assert.match(workflow, /actions\/deploy-pages@v4/);
  assert.match(workflow, /path:\s*dist\/client/);
  assert.match(layout, /metadataBase:\s*new URL\(["']https:\/\/saqibmehdi\.github\.io["']\)/);
  assert.doesNotMatch(layout, /next\/headers|generateMetadata/);

  await Promise.all([
    access(new URL("../dist/client/saqib-mehdi-cv.pdf", import.meta.url)),
    access(new URL("../dist/client/og.png", import.meta.url)),
    access(new URL("../dist/client/gnss-cityscape-page.png", import.meta.url)),
    access(new URL("../dist/client/shinjuku-coverage-sequence.mp4", import.meta.url)),
  ]);
});
