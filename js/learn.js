const params = new URLSearchParams(window.location.search);

function httpGet(theUrl) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", theUrl, false); // false for synchronous request
	xmlHttp.setRequestHeader(
		"Access-Control-Allow-Origin",
		`http://${params.get("locale")}.wikipedia.org`
	);
	xmlHttp.send(null);
	return xmlHttp.responseText;
}

if (params.get("locale") === "" || params.get("locale") === null)
	window.location.replace("index.html");

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Origin", window.location.origin);

(async () => {
	// const page = await window.fetch(`/getpage?locale=${params.get("locale")}`, {
	// 	method: "GET",
	// 	headers: myHeaders,
	// });
	// page.json().then((txt) => {
	// 	document.getElementById("page").innerHTML = txt.text["*"];
	// });
})().catch((err) => {
	console.error(err);
});

document.getElementById("finishButton").addEventListener("click", () => {
	document.getElementById("page").innerHTML =
		'<h1>We hope you learned something new!</h1><a href="/">Return to home page</a><br /><a href="#" onclick="window.location.reload()">Restart</a>';
});
