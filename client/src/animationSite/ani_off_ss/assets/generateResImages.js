// generateResImages.js
const fs = require("fs");
const path = require("path");

const dir = "./images";
const files = fs.readdirSync(dir);

const sanitizeKey = (filename) =>
  filename
    .replace(path.extname(filename), "") // 拡張子を除く
    .replace(/[^a-zA-Z0-9_]/g, "_"); // 記号をアンダースコアに

const output = ["const OffImagesRoute = {"];

files.forEach((file) => {
  const key = sanitizeKey(file);
  output.push(`  ${key}: require("${dir}/${file}"),`);
});

output.push("};");
output.push("");
output.push("export default OffImagesRoute;");

fs.writeFileSync("OffImagesRoute.js", output.join("\n"));
console.log("✅ ResImagesRoute.js を生成しました！");
