import { pageLoad } from './pageload';
import { renderAddItemForm } from './additem'
import { compareAsc, format } from 'date-fns'
// import { displayItems } from './displayitems';

pageLoad();
// displayItems();
let dateNow = format(new Date(), 'yyy-MM-dd');
console.log(dateNow);

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

const addItemButton = document.querySelector('#nav-add-item');
addItemButton.addEventListener('click', () => {
    console.log('clicked add item');
    renderAddItemForm();
    // console.log(dateDueInput);
});

// window.addEventListener('click', (e) => {
//     console.log(this);
//     console.log(e);
// })