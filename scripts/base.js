import { existsSync, writeFileSync, readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { argv } from "process";

const isRevert = argv[2] === "--revert";

const BASE_URL = isRevert ? "https://legerakun.github.io" : "";
const IMAGE_PATH = isRevert ? "./nft-landing/" : "./";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const env = resolve(__dirname, "..", ".env");

if (!existsSync(env)) {
  writeFileSync(env, "");
  console.log(".env file created.");
} else {
  console.log(".env file already exists.");
}

const envContent = readFileSync(env, "utf8");

const createOrChangeVar = (content, matchRegex, replaceRegex, key, value) => {
  const hasVariable = content.match(matchRegex);

  const newContent = hasVariable
    ? content.replace(replaceRegex, `${key}="${value}"`)
    : `${content}\n${key}="${value}"`;

  console.log(
    hasVariable
      ? `${key} variable updated to "${value}".`
      : `${key} variable added with value "${value}".`
  );

  return newContent;
};

const fixedBaseURL = createOrChangeVar(
  envContent,
  /^VITE_BASE_URL=/m,
  /^VITE_BASE_URL=.*$/m,
  "VITE_BASE_URL",
  BASE_URL
);

const fixedImagePath = createOrChangeVar(
  fixedBaseURL,
  /^VITE_IMAGE_PATH=/m,
  /^VITE_IMAGE_PATH=.*$/m,
  "VITE_IMAGE_PATH",
  IMAGE_PATH
);

writeFileSync(env, fixedImagePath);
