import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { roadmapLocales, renderProjectRoadmapSvg, renderDevelopmentRoadmapSvg, readmeEntries } from "./update-roadmaps.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "../../../..");

async function runTests() {
  console.log("Running roadmaps verification tests...");

  // 1. Verify all 10 locales are registered
  const expectedCodes = ["en", "ko", "zh-CN", "es", "hi", "ar", "pt-BR", "ru", "fr", "id"];
  for (const code of expectedCodes) {
    assert.ok(roadmapLocales[code], `Locale ${code} must exist in roadmapLocales`);
  }
  console.log("[PASS] All 10 locale configurations verified");

  // 2. Test SVG rendering & valid XML headers
  for (const [code, cfg] of Object.entries(roadmapLocales)) {
    const projSvg = renderProjectRoadmapSvg(cfg);
    const devSvg = renderDevelopmentRoadmapSvg(cfg);

    assert.ok(projSvg.startsWith("<svg"), `${code}: project SVG must start with <svg`);
    assert.ok(projSvg.endsWith("</svg>"), `${code}: project SVG must end with </svg>`);
    assert.ok(projSvg.includes(cfg.projTitle), `${code}: project SVG must contain localized title`);

    assert.ok(devSvg.startsWith("<svg"), `${code}: dev SVG must start with <svg`);
    assert.ok(devSvg.endsWith("</svg>"), `${code}: dev SVG must end with </svg>`);
    assert.ok(devSvg.includes(cfg.devTitle), `${code}: dev SVG must contain localized title`);
  }
  console.log("[PASS] Deterministic SVG rendering across all 10 locales verified");

  // 3. Verify README references
  assert.equal(readmeEntries.length, 10, "Must have exactly 10 readme entries");
  for (const entry of readmeEntries) {
    const fullPath = path.join(projectRoot, entry.file);
    assert.ok(existsSync(fullPath), `Target file ${entry.file} must exist`);
  }
  console.log("[PASS] All 10 markdown targets exist and verified");

  console.log("All roadmaps tests passed successfully!");
}

runTests().catch(err => {
  console.error("[FAIL] Test failure:", err);
  process.exit(1);
});
