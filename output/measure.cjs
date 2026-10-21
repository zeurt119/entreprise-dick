const fs = require('node:fs');
const zlib = require('node:zlib');
const files = ['index.html','style.css','script.js','espace.svg','favicon.svg','mentions-legales.html'];
const sizes = files.map(file => {const source=fs.readFileSync(file);return {file,bytes:source.length,gzip:zlib.gzipSync(source).length};});
const luminance = hex => {
  const rgb = hex.match(/[a-f0-9]{2}/gi).map(n=>parseInt(n,16)/255).map(c=>c<=.04045?c/12.92:((c+.055)/1.055)**2.4);
  return rgb[0]*.2126+rgb[1]*.7152+rgb[2]*.0722;
};
const pairs=[['202b25','f4f4ed'],['5d655e','f4f4ed'],['5d655e','e7eadf'],['ffffff','202b25'],['ffba8c','202b25'],['a12c16','f4f4ed']];
const contrasts=pairs.map(([text,bg])=>{const a=luminance(text),b=luminance(bg);return {text,bg,ratio:((Math.max(a,b)+.05)/(Math.min(a,b)+.05)).toFixed(2)};});
const code=fs.readFileSync('script.js','utf8');
console.log(JSON.stringify({date:'2026-10-19',sizes,totalBytes:sizes.reduce((n,s)=>n+s.bytes,0),totalGzip:sizes.reduce((n,s)=>n+s.gzip,0),contrasts,unsafeSinks:/innerHTML|outerHTML|insertAdjacentHTML|document\.write|eval\(|new Function|localStorage|sessionStorage|fetch\(|XMLHttpRequest/.test(code)},null,2));
