// import { LibManifestPlugin } from 'webpack';
import { itemsList, projectsList } from './storeitems';

console.log('displayitems script');
const projectNav = document.getElementById('project-nav');
const projectsDiv = document.createElement('div');
const itemsDiv = document.createElement('div');
itemsDiv.id = 'items-div';

const removeItems = () => {
    // const main = document.querySelector('#main');
    while (itemsDiv.lastElementChild) {
        console.log(`attempting to remove child`);
        itemsDiv.removeChild(itemsDiv.lastElementChild);
    }
};

// const renderSideBar = () => {
//     for (let i = 0; i < projectsList.length; i++) {
//         let projectItem = document.createElement('a');
//         projectItem.textContent = `${projectsList[i]}`;
//         console.log(projectItem);
//         console.log(projectNav);
//         projectNav.appendChild('projectItem');
//     }
//     // projectNav.appendChild('projectsDiv');
// };

const displayItems = () => {
    removeItems();
    
    for (let i = 0; i < itemsList.length; i++) {
        let title = document.createElement('h3');
        let description = document.createElement('p');
        let dateDue = document.createElement('p');
        title.textContent = `${itemsList[i].title}`;
        description.textContent = `${itemsList[i].description}`;
        dateDue.textContent = `Due: ${itemsList[i].dateDue}`;
        
        let itemDiv = document.createElement('div');

        itemDiv.appendChild(title);
        itemDiv.appendChild(description);
        itemDiv.appendChild(dateDue);
        itemsDiv.appendChild(itemDiv);
    }
    
    main.appendChild(itemsDiv);
};

export { displayItems }