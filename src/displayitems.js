// import { LibManifestPlugin } from 'webpack';
import { itemsList, projectsList } from './storage';
import { openItemModal } from './additem';

console.log('renderAllItems script');
const projectNav = document.createElement('div');
projectNav.id = 'project-nav';
const projectsDiv = document.createElement('div');
const itemsDiv = document.createElement('div');
itemsDiv.id = 'items-div';

const removeSideBar = () => {
    while (projectNav.lastElementChild) {
        console.log(`attempting to remove child`);
        projectNav.removeChild(projectNav.lastElementChild);
    }
};

const removeItems = () => {
    // const main = document.querySelector('#main');
    while (itemsDiv.lastElementChild) {
        console.log(`attempting to remove child`);
        itemsDiv.removeChild(itemsDiv.lastElementChild);
    }
};

const renderSideBar = () => {
    removeSideBar();

    let allProjectsButton = document.createElement('a');
    allProjectsButton.className = 'project-item';
    allProjectsButton.textContent = 'All Cards';
    projectNav.appendChild(allProjectsButton);

    for (let i = 0; i < projectsList.length; i++) {
        console.log('renderSideBarIn');
        let projectItem = document.createElement('a');
        projectItem.className = 'project-item';
        projectItem.textContent = `${projectsList[i]}`;
        projectNav.appendChild(projectItem);
    };
    const addProjectBtn = document.createElement('a');
    addProjectBtn.textContent = '+';
    addProjectBtn.id = 'add-project-btn';
    addProjectBtn.contentEditable = 'true';
    projectNav.appendChild(addProjectBtn);
    main.appendChild(projectNav);

    let projectItems = document.querySelectorAll('.project-item');
    console.log(projectItems);
    projectItems.forEach(item => {
        item.addEventListener('click', renderProjectItems);
    });
};

const renderNewItemBtn = () => {
    const addItemBtn = document.createElement('a');
    addItemBtn.className = 'item-div';
    addItemBtn.id = 'add-item-btn';
    addItemBtn.textContent = '+';
    itemsDiv.appendChild(addItemBtn);
    main.appendChild(itemsDiv);

    addItemBtn.addEventListener('click', () => {
        console.log('clicked add item');
        openItemModal();

    });
}

const renderProjectItems = (e) => {
    removeItems();

    // Make sure the Project name is atop
    let projectTitle = document.querySelector('#project-title');

    console.log(e);

    if (e == undefined) {
        projectTitle.textContent = projectTitle.textContent
    } else {
        projectTitle.textContent = `${e.target.textContent}`;

    }

    
    for (let i = 0; i < itemsList.length; i++) {
        if (projectTitle.textContent == itemsList[i].project) {
            let title = document.createElement('h3');
            let description = document.createElement('p');
            let dateDue = document.createElement('p');
            dateDue.class = 'due-date';
            title.textContent = `${itemsList[i].title}`;
            description.textContent = `${itemsList[i].description}`;
            dateDue.textContent = `Due: ${itemsList[i].dateDue}`;
            
            let itemDiv = document.createElement('div');
            itemDiv.className = 'item-div';
            
            itemDiv.appendChild(title);
            itemDiv.appendChild(description);
            // Only append date due if there exists one
            console.log(itemsList[i].dateDue)
            if (itemsList[i].dateDue !== '') {
                itemDiv.appendChild(dateDue);
            }
            itemsDiv.appendChild(itemDiv);
        }
    }
    renderNewItemBtn();
    if (projectsList.includes(projectTitle.textContent) == false) renderAllItems();
}

const renderHeader = () => {

};

const renderAllItems = () => {
    removeItems();
    // renderHeader();

    // renderNewItemBtn();

    for (let i = 0; i < itemsList.length; i++) {

        

        let title = document.createElement('h3');
        let description = document.createElement('p');
        let dateDue = document.createElement('p');
        title.textContent = `${itemsList[i].title}`;
        description.textContent = `${itemsList[i].description}`;
        dateDue.textContent = `Due: ${itemsList[i].dateDue}`;

        let itemDiv = document.createElement('div');
        itemDiv.className = 'item-div';

        itemDiv.appendChild(title);
        itemDiv.appendChild(description);
        itemDiv.appendChild(dateDue);
        itemsDiv.appendChild(itemDiv);
    }


    main.appendChild(itemsDiv);
};

export { renderAllItems, renderSideBar, renderProjectItems }