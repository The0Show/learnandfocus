const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("js"));

app.get("/", (req, res) => {
	res.sendFile(`${__dirname}/index.html`);
});

app.get("/learn", (req, res) => {
	res.sendFile(`${__dirname}/learn.html`);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
