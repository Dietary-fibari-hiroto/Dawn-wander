const fs = require("fs");
const path = require("path");

const directoryPath = "./photos";
const outputPath = "./output.json";

const genderMap = {
  RD: "rd",
  ME: "me",
};

// ✅ ここにブランド名一覧（プレフィックス）を登録
const knownBrands = [
  "affaiver",
  "aiver",
  "auntierosa",
  "casperjohn",
  "CLEL", // 必要に応じて追加
  "ezick",
  "mideal",
  "moment+",
  "monomart",
  "SHIPS",
];

const result = [];

fs.readdirSync(directoryPath).forEach((file) => {
  const ext = path.extname(file);
  if (![".jpg", ".jpeg", ".png"].includes(ext.toLowerCase())) return;

  const filenameWithoutExt = path.basename(file, ext);

  // ブランド名にマッチするものを探す
  const brand = knownBrands.find((b) => filenameWithoutExt.startsWith(b));

  if (!brand) {
    console.warn(`ブランド名が特定できないファイル: ${file}`);
    return;
  }

  const rest = filenameWithoutExt.slice(brand.length); // 残り部分＝商品名＋価格＋性別コード
  const regex = /^(.+?)(\d+)(RD|ME)?$/;
  const match = rest.match(regex);

  if (match) {
    const [, nameRaw, priceRaw, genderRaw] = match;

    const webPath = path.join(directoryPath, file).replace(/\\/g, "/");

    result.push({
      brand: brand,
      name: nameRaw,
      price: parseInt(priceRaw, 10),
      gender: genderMap[genderRaw] || "ユニセックス",
      path: webPath,
    });
  } else {
    console.warn(`商品名＋価格の形式が不正: ${file}`);
  }
});

fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), "utf8");
console.log(`✅ JSONファイルを書き出しました: ${outputPath}`);
