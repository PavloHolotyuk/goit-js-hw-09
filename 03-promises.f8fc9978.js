function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=r.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){n[e]=r},r.parcelRequired7c6=o);var i=o("eWCmQ");function l(e,r){const t=Math.random()>.3;return new Promise(((n,o)=>{setTimeout((()=>{t?n({i:e,delay:r}):o({i:e,delay:r})}),r)}))}document.querySelector(".form").addEventListener("submit",(function(r){r.preventDefault();let{delay:t,step:n,amount:o}=r.currentTarget;t=Number(t.value),n=Number(n.value),o=Number(o.value);for(let r=1;r<=o;r+=1)l(r,t).then((({i:r,delay:t})=>{e(i).Notify.success(`Fulfilled promise ${r} in ${t}ms`)})).catch((({i:r,delay:t})=>{e(i).Notify.failure(`Rejected promise ${r} in ${t}ms`)})),t+=n}));
//# sourceMappingURL=03-promises.f8fc9978.js.map
