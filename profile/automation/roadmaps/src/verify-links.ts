import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "../../../..");

export function verifyAllLinks(): void {
  const targets = [
    "README.md",
    "profile/content/locales/ko.md",
    "profile/content/locales/zh-CN.md",
    "profile/content/locales/es.md",
    "profile/content/locales/hi.md",
    "profile/content/locales/ar.md",
    "profile/content/locales/pt-BR.md",
    "profile/content/locales/ru.md",
    "profile/content/locales/fr.md",
    "profile/content/locales/id.md",
  ];

  let testedCount = 0;

  for (const file of targets) {
    const fullFilePath = path.join(projectRoot, file);
    if (!fs.existsSync(fullFilePath)) {
      throw new Error(`Missing target markdown file: ${file}`);
    }
    const content = fs.readFileSync(fullFilePath, "utf-8");
    const regex = /(?:src|srcset)="([^"]+)"/g;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(content)) !== null) {
      const rawSrc = match[1];
      const cleanSrc = rawSrc.split("?")[0];
      if (cleanSrc.startsWith("http://") || cleanSrc.startsWith("https://")) {
        continue;
      }
      const resolved = path.resolve(path.dirname(fullFilePath), cleanSrc);
      if (!fs.existsSync(resolved)) {
        throw new Error(`Broken asset link in ${file} -> "${rawSrc}" (resolved: "${resolved}")`);
      }
      testedCount++;
    }
  }

  console.log(`[PASS] Verified ${testedCount} relative image & asset links across all 10 markdowns without errors!`);
}

if (process.argv[1] && process.argv[1].endsWith("verify-links.js")) {
  try {
    verifyAllLinks();
  } catch (err) {
    console.error("[FAIL]", err);
    process.exit(1);
  }
}
