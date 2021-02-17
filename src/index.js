import { pageLoad } from './pageload';
import { renderItems, renderSideBar } from './displayitems';
import addProject from './addproject';
import { openItemModal } from './additem'
import { compareAsc, format } from 'date-fns'

// const renderItems1 = () => {
//     console.log(`current items`);
//     // console.log(itemsList)
// };
// const main = document.getElementById("main");

pageLoad();
renderItems();
renderSideBar();
addProject();

let dateNow = format(new Date(), 'yyyy-MM-dd');
console.log(dateNow);

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

// const addItemBtn = document.querySelector('#add-item-btn');
// addItemBtn.addEventListener('click', () => {
//     console.log('clicked add item');
//     openItemModal();
//     renderItems();
// });

// const homeButton = document.querySelector('#nav-home');
// homeButton.addEventListener('click', () => {
//     console.log('clicked home button');
//     renderItems();
// })

// set up event listener for add project

// set up new event listener for add item to project

document.addEventListener('click', (e) => {
    // console.log(e);
})