import { compareAsc, format } from 'date-fns'
//store new item

//store project
console.log('storeitems script');

const projectsList = [];

const itemsList = [];
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
projectsList.push("Work");
projectsList.push("Sport");
itemsList.push(new Item("Work", "Week 6", "The weeks targets are going to be amazing. Hold on.", "2021-2-18", "false"));
itemsList.push(new Item("Sport", "Gym Routine", "I will work out at the gym for 10 minutes!", "2021-2-16", "false"));
itemsList.push(new Item("Work", "Week 7", "The weeks targets are going to be better than week 6's. Let's do it.", "2021-2-25", "false"));
itemsList.push(new Item("Sport", "Sports on TV", "Need to watch the footy tonight!", "2021-2-18", "false"));

const addToItems = (project, title, description, dateDue, pinned) => {
    itemsList.push(new Item(project, title, description, dateDue, pinned));
    console.log(itemsList);
}

const addToProjects = (project) => {
    projectsList.push(project);
    console.log(projectsList);
}

// let firstItem = new Item('new project');



export { addToItems, addToProjects, itemsList, projectsList };