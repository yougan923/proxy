const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(express.static("public"));

app.get("/proxy", (req, res) => {
  const url = req.query.url;

  if (!url) {
    return res.send("URLを入力してください");
  }

  res.send(`
    <h2>Proxy</h2>
    <p>接続先: ${url}</p>
    <p>プロキシ機能準備中</p>
  `);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Proxy server running");
});
