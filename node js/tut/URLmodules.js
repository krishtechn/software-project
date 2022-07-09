import url from 'url';

const myURL = new URL('https://example.org');
myURL.password = "krish";
console.log(myURL.href);