console.log('pageload script');

const contentContainer = document.getElementById("content");

const header = document.createElement('header');
const main = document.createElement('main');
const footer = document.createElement('footer');
header.id= 'header';
footer.id = 'footer';
main.id = 'main';
const navBarItems = ["home", "add-project", "add-item"]
const navBarButtons = document.createElement('div');

const createNavBarItems = () => {
    navBarItems.forEach((element) => {
    let button = document.createElement('button');
        button.className = 'nav-button';
        button.id = 'nav-' + element;
        button.textContent = element;
        navBarButtons.appendChild(button);
    });
}

const pageLoad = () => {
    createNavBarItems();
    header.appendChild(navBarButtons);
    contentContainer.appendChild(header);
    contentContainer.appendChild(main);
    contentContainer.appendChild(footer);
}

export { pageLoad }