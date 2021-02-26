import { compareAsc, format } from 'date-fns'
import { renderAllItems, renderSideBar } from './displayitems';
//store new item

class Item {
    constructor(project, title, description, dateDue, pinned) {
        this.project = project;
        this.title = title;
        this.description = description;
        this.dateDue = dateDue;
        this.pinned = pinned
        this.dateCreated = format(new Date(), 'yyy-MM-dd');
    }
}
//store project

let projectsList = [];

let itemsList = [];

window.onload = function () {

    if (JSON.parse(localStorage.getItem("projectsList")) != null) {
        projectsList = JSON.parse(localStorage.getItem("projectsList"));
    }

    if (JSON.parse(localStorage.getItem("itemsList")) != null) {
        itemsList = JSON.parse(localStorage.getItem("itemsList"));
    }
    renderSideBar();
    renderAllItems();
};

const addToItems = (project, title, description, dateDue, pinned) => {
    itemsList.push(new Item(project, title, description, dateDue, pinned));
    updateStorage();
}

const editItem = (index, title, description, dateDue, pinned) => {
    itemsList[index].title = title;
    itemsList[index].description = description;
    itemsList[index].dateDue = dateDue;
    itemsList[index].pinned = pinned;
    updateStorage();
}

const deleteItem = (index) => {
    itemsList.splice(index, 1);
    updateStorage();
}

const addToProjects = (project) => {
    projectsList.push(project);
    updateStorage();
}

const editProject = (oldProjectName, newProjectName) => {
    // Update project name in projectList
    for (let i = 0; i < projectsList.length; i++) {
        if (projectsList[i] == oldProjectName) {
            projectsList[i] = newProjectName;
        }
    }

    // Edit project associated with relevant item in item list
    for (let i = 0; i < itemsList.length; i++) {
        if (itemsList[i].project == oldProjectName) {
            itemsList[i].project = newProjectName;
        }
    }
    console.log(projectsList)
    console.log(itemsList);

    updateStorage();
}

const deleteProject = (project) => {
    
}

function updateStorage() {
    if (localStorage.getItem("itemsList") == null) {
        localStorage.setItem("itemsList", JSON.stringify(itemsList));
    } else {
        localStorage.setItem("itemsList", JSON.stringify(itemsList));
    }

    if (localStorage.getItem("projectsList") == null) {
        localStorage.setItem("projectsList", JSON.stringify(projectsList));
    } else {
        localStorage.setItem("projectsList", JSON.stringify(projectsList));
    }
}


projectsList.push("Work");
projectsList.push("Sport");
itemsList.push(new Item("Work", "Week 6", "The weeks targets are going to be amazing. Hold on.", "2021-2-18", "false"));
itemsList.push(new Item("Sport", "Gym Routine", "I will work out at the gym for 10 minutes!", "2021-2-16", "false"));
itemsList.push(new Item("Work", "Week 7", "The weeks targets are going to be better than week 6's. Let's do it.", "2021-2-25", "false"));
itemsList.push(new Item("Sport", "Sports on TV", "Need to watch the footy tonight!", "2021-2-18", "false"));


export { addToItems, addToProjects, editItem, deleteItem, editProject, deleteProject, itemsList, projectsList };