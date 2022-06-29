const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// Bubbling
// grandparent.addEventListener('click', (e) => {
//   console.log('grandparent'); // grandparent document
// })
// parent.addEventListener('click', (e) => {
//   console.log('parent'); // parent grandparent document
// })
// child.addEventListener('click', (e) => {
//   console.log('child'); // child parent grandparent document
// })
// document.addEventListener('click', (e) => {
//   console.log('document'); // document
// })

// ===================
// Capture
// grandparent.addEventListener('click', (e) => {
//   console.log('grandparent'); // grandparent
// }, { capture: true })
// parent.addEventListener('click', (e) => {
//   console.log('parent'); // grandparent parent
// })
// child.addEventListener('click', (e) => {
//   console.log('child'); // grandparent child parent 
// })

// ===================
// Stop Propagation
// grandparent.addEventListener('click', (e) => {
//   console.log('grandparent');
// }, { capture: true })
// parent.addEventListener('click', (e) => {
//   console.log('parent');
// })
// child.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log('child'); // grandparent child
// })

// ===================
// Run event only once
// grandparent.addEventListener('click', (e) => {
//   console.log('grandparent');
// })
// parent.addEventListener('click', (e) => {
//   console.log('parent');
// })
// child.addEventListener('click', (e) => {
//   console.log('child');
// }, { once: true }) // 1.child parent grandparent, 2.parent grandparent

// ===================
// RemoveEventListener
// parent.addEventListener('click', printHi);

// setTimeout(() => {
//   parent.removeEventListener('click', printHi);
// }, 2000);

// function printHi() {
//   console.log("Hi");
// }
// ===================
// Event Delegation
const divs = document.querySelectorAll("div");

addGlobalEventListener("click", "div", e => console.log("hi"))

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, e => {
    if (e.target.matches(selector)) callback(e);
  })  
}
