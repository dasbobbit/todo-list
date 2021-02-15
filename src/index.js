import { pageLoad } from './pageload';
import { renderAddItemForm } from './additem'
import { compareAsc, format } from 'date-fns'
import { displayItems } from './displayitems';
import { addInitialItems } from './storeitems';

// const displayItems1 = () => {
//     console.log(`current items`);
//     // console.log(itemsList)
// };
// const main = document.getElementById("main");

addInitialItems();
pageLoad();
displayItems();

let dateNow = format(new Date(), 'yyyy-MM-dd');
console.log(dateNow);

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

const addItemButton = document.querySelector('#nav-add-item');
addItemButton.addEventListener('click', () => {
    console.log('clicked add item');
    renderAddItemForm();
    displayItems();
});

const homeButton = document.querySelector('#nav-home');
homeButton.addEventListener('click', () => {
    console.log('clicked home button');
    displayItems();
})

// window.addEventListener('click', (e) => {
//     console.log(this);
//     console.log(e);
// })