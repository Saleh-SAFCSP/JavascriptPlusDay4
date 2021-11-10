// console.log('Hey from script');

// DOM
// Document object Model

// const user = {
//   fullName: {
//     firstName: 'saleh',
//     lastName: 'Ali',
//   },
//   password: '12345',
//   login: () => {
//     return 'User login successful';
//   },
// };

// user.password = '567';

// console.log(user.fullName.lastName);
// console.log(user.login());

// const documentLocal = {
//   head: {
//     meta: 'UTF',
//     title: 'Work List',
//   },
//   body: {
//     header: {
//       div: {
//         h1: 'Shopping List',
//       },
//     },
//     div: {
//       div: {
//         h2: 'Add Items',
//       },
//     },
//   },
// };

// console.log(documentLocal.body.header.div.h1);
// console.log(documentLocal.body.div.div.h2);
// console.log(document);
// console.log(document.body);
// console.log(document.head);

// Retrieving elements from the DOM

// 1- Traversing the DOM
// document.body.div.div.h2
// const mainTitle = document.body.children[1].children[0].children[0];
// mainTitle.innerHTML = 'We are here !';

// 2- Get element by
// const mainTitle = document.getElementById('main-title');
// console.log(mainTitle);
// mainTitle.innerHTML = 'We are here !';
// const listGroupItems = document.getElementsByClassName('list-group-item');
// console.log(listGroupItems);
// listGroupItems[1].innerHTML = 'We are here !';
// const h2Group = document.getElementsByTagName('h2');
// h2Group[0].innerHTML = 'We are here !';
// console.log(h2Group);

// 3- Query selector
// const mainTitle = document.querySelector('#main-title');
// console.log(mainTitle);
// const listGroupItems = document.querySelectorAll('.list-group-item');
// console.log(listGroupItems);
// listGroupItems[1].innerHTML = 'We are here !';

// const headerTitle = document.getElementById('header-title');
// headerTitle.innerHTML = '<b><h1>This is the main header</h1></b>';
// headerTitle.innerText = '<b>This is the main header<b/>';
// headerTitle.classList.add('color-red');
// headerTitle.classList.remove('color-red');
// headerTitle.classList.toggle('color-red');
// headerTitle.classList.add('hidden');
// headerTitle.classList.toggle('hidden');
// headerTitle.style.color = 'green';
// headerTitle.style.backgroundColor = 'red';

// Creating new element
// const newLi = document.createElement('li');
// newLi.innerText = 'item 5';
// newLi.classList.add('list-group-item');
// const ul = document.getElementById('items');
// ul.appendChild(newLi);

// Event Listeners
// const documentClicked = () => {
//   console.log('Document Clicked');
// };

// document.addEventListener('click', documentClicked);
// const clearButton = document.getElementById('clear-button');
// const inputForm = document.getElementById('input-form');
// const headerTitle = document.getElementById('header-title');
// clearButton.addEventListener('click', (event) => {
//   headerTitle.classList.toggle('hidden');
//   console.log(event);
//   event.target.style.backgroundColor = 'green';
//   console.log(event.target.classList.contains('btn'));
//   inputForm.value = '';
//   console.log('Button Clicked');
// });

// document.getElementById('input-form').addEventListener('keypress', (event) => {
//   if (!isNaN(event.key)) {
//     event.preventDefault();
//   }
// });

// document.getElementById('submit-form').addEventListener('submit', (event) => {
//   event.preventDefault();
//   const inputForm = document.getElementById('input-form');
//   const value = inputForm.value;
//   const newElement = document.createElement('li');
//   newElement.innerHTML = value;
//   newElement.classList.add('list-group-item');
//   const listGroup = document.getElementById('items');
//   listGroup.appendChild(newElement);
// });
