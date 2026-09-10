url = document.URL;
query = "yabec";
index = url.indexOf(query);
rootUrl = url.slice(0, index + query.length) + "/"

A = url.lastIndexOf("/") + 1;
B = url.lastIndexOf(".");
page = url.slice(A, B)
pwdUrl = url.slice(0, A)

//topnav
homeUrl = rootUrl + "index.html"
classUrl = rootUrl + "character/class/index.html"
shopUrl = rootUrl + "character/items/index.html"
rulesUrl = rootUrl + "adventure/index.html"

navContent = '\
<div class="topNavContainer">\
  <h1>YABEC</h1>\
  <div class="center">\
    <a class="active" href="' + homeUrl + '">Home</a>\
    <a href="' + classUrl + '">Classes</a>\
    <a href="' + shopUrl + '">Items</a>\
    <a href="' + rulesUrl + '">Rules</a>\
  </div>\
</div>'

element = document.getElementById("topnav");
element.innerHTML = navContent;

//next page
let dictionary = {};
dictionary["intro"] = "delve";
dictionary["delve"] = "combat";
dictionary["combat"] = "mapping";
dictionary["mapping"] = "cleanup";
dictionary["cleanup"] = "travel";
dictionary["travel"] = "roles";

function findKeyByValue(dict, value) {
	for (const key in dict) {
		if (dict[key] === value) return key;
	}
	return undefined;
}

nextPage = dictionary[page];
prevPage = findKeyByValue(dictionary, page);

if (nextPage || prevPage) {
	linkContainer = document.createElement('div');
	linkContainer.id = "bottomNav";
	if (prevPage) {
		link = document.createElement('a');
		link.href = pwdUrl + prevPage + '.html';
		link.innerHTML = "Last: " + titleCase(prevPage);
		link.id = "prevPage"
		linkContainer.appendChild(link);
	}
	if (nextPage) {
		link = document.createElement('a');
		link.href = pwdUrl + nextPage + '.html';
		link.innerHTML = "Next: " + titleCase(nextPage);
		link.id = "nextPage"
		linkContainer.appendChild(link);
	}
	window.addEventListener('load', () => {
		document.body.appendChild(linkContainer);
	});
}

function titleCase(str) {
	if ((str === null) || (str === ''))
		return false;
	else
		str = str.toString();

	return str.replace(/\w\S*/g, function(txt) {
		return txt.charAt(0).toUpperCase() +
			txt.substr(1).toLowerCase();
	});
}
