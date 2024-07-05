// import express from "express"; // ESM
const express = require("express"); // CJS
const { singers } = require("./singer.json");
console.log(singers);

const app = express();

app.get("/", (req, res) => {
	// res.send("welcome to 首頁~");
  res.redirect("/singer/1.html")
}); // 看老師示範07050943

app.get("/singer/:id.html", (req, res) => {
	const id = parseInt(req.params.id);
	const result = singers.find(singer => {
		if (singer.id === id) {
			return true;
		}
	});
	if (!result) {
		// 沒有結果
		res.statusCode = 404; // http模組屬性
		res.status(404);
		res.send("<h1>404: 找不到歌手</h1>");
	}
	// 有結果
	res.send(`<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>${result.singer_name}</title>
	</head>
	<body>
		<h1>${result.singer_name}</h1>
		<h3>${result.singer_id}</h3>
		<img src="${result.singer_img}" alt="" />
	</body>
</html>
`);
});

app.all("*", (req, res) => {
	res.send("<h1>404: 璀謀</h1>");
});

app.listen(3000, () => {
	console.log(`http://localhost:3000: 七棟!`);
});
