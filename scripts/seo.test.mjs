import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve("dist");
const pages = ["", "about", "research", "students", "teaching", "publications", "join"];
const read = (slug) => readFileSync(resolve(root, slug, "index.html"), "utf8");

test("English pages exist; untranslated mirror is absent", () => {
  for (const slug of pages) assert.ok(existsSync(resolve(root, slug, "index.html")), slug);
  assert.equal(existsSync(resolve(root, "mi")), false);
});
test("English pages have canonical URLs, unique titles and one H1", () => {
  const titles = new Set();
  for (const slug of pages) {
    const html = read(slug);
    const path = slug ? "/" + slug + "/" : "/";
    assert.ok(html.includes('<html lang="en"'));
    assert.ok(html.includes('rel="canonical" href="https://knowlton.co.nz' + path + '"'));
    assert.ok(!html.includes('hreflang="mi"'));
    assert.ok(!html.includes('mi_NZ'));
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    assert.ok(title && !titles.has(title), path);
    titles.add(title);
    assert.ok(html.includes('name="description"'));
    assert.equal((html.match(/<h1(?:\s[^>]*)?>/g) || []).length, 1);
  }
});
test("llms directory and redirected teaching resource are included", () => {
  assert.ok(readFileSync(resolve(root, "llms.txt"), "utf8").includes("https://knowlton.co.nz/161251/"));
  assert.ok(read("teaching").includes('href="/161324/"'));
  assert.ok(readFileSync(resolve(root, "161777/index.html"), "utf8").includes("noindex"));
});
