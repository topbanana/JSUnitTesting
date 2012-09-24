function htmlify(str) {
	return str.replace(/\>/g, "&gt;\n").replace(/\</g, "&lt;");
}