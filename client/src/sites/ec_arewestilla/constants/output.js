const fs = require("fs");
const path = require("path");

const directoryPath = "../assets/images/photos"; // ←ここに対象ディレクトリを指定

const outputPath = "./output.json"; // ← 出力先のJSONファイル名

// 性別コードの変換
const genderMap = {
  RD: "レディース",
  ME: "メンズ",
};

// JSON配列を作成
const result = [];

fs.readdirSync(directoryPath).forEach((file) => {
  const ext = path.extname(file);
  if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") return;

  const filenameWithoutExt = path.basename(file, ext);

  // ファイル名をパース（空白なし想定）
  // 例: auntierosaレイヤードセーラーT5500RD
  const regex = /^([^\d]+)([^\d]+)(\d+)(RD|ME)?$/;
  const match = filenameWithoutExt.match(regex);

  if (match) {
    const [, brandRaw, nameRaw, priceRaw, genderRaw] = match;

    result.push({
      brand: brandRaw,
      name: nameRaw,
      price: parseInt(priceRaw, 10),
      gender: genderMap[genderRaw] || "ユニセックス",
      path: path.join(directoryPath, file),
    });
  } else {
    console.warn(`形式が合わないファイル名: ${file}`);
  }
});

fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), "utf8");
