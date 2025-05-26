#!/usr/bin/env node

const { execSync } = require("child_process");

try {
  // Получаем список staged файлов
  const stdout = execSync("git diff --cached --name-only --diff-filter=ACM", {
    encoding: "utf-8",
  });

  // Фильтруем только .js, .jsx, .ts, .tsx файлы
  const files = stdout
    .split("\n")
    .map((f) => f.trim())
    .filter(
      (f) =>
        /\.(js|jsx|ts|tsx)$/.test(f) &&
        !f.startsWith("node_modules") &&
        f.length > 0,
    );

  if (files.length === 0) {
    console.log("No staged JS/TS files to lint.");
    process.exit(0);
  }

  // Запускаем eslint только на этих файлах
  const eslintCmd = `npx eslint ${files.join(" ")}`;
  console.log(`Running: ${eslintCmd}`);
  execSync(eslintCmd, { stdio: "inherit" });
} catch (err) {
  console.error("Linting failed.");
  process.exit(1);
}
