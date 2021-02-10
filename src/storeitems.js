import { compareAsc, format } from 'date-fns'
//store new item

//store project

let itemsList = [];
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

const addToItems = (project, title, description, dateDue, pinned) => {
    itemsList.push(new Item(project, title, description, dateDue, pinned));
    console.log(itemsList);
}
// let firstItem = new Item('new project');

// const currentItems = () => {
//     console.log(`current items on store items`);
//     console.log(currentItems);
//     return itemsList;
// };

export { addToItems };