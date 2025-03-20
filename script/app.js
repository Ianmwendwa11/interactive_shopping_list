const shoppingList = ['nike', 'earphones', 'addidas'];

function createAnElement(element) {
    return document.createElement(element);
}

function addText(element, text) {
    element.innerText = text; 
}

function appendChild(parentElement, childElement) {
    parentElement.appendChild(childElement);
}

function select(selector) {
    return document.querySelector(selector);
}

function addAttribute(element, attribute, content) {
    element.setAttribute(attribute, content);
}

document.addEventListener('DOMContentLoaded', displayItems); 

function displayItems() {
    const ol = select('ol'); 
    shoppingList.forEach(createAListItem);
}

function createAListItem(item) {
    const ol = select('ol'); 
    const li = createAnElement('li');
    addText(li, item);
    appendChild(ol, li);
    
    li.addEventListener('click', toggleChecked); 
}

function toggleChecked() {
    this.classList.toggle("checked"); 
}

const form = select ('form');

addEventListener(form, 'submit', addItem);

function addItem(event) {
    event.preventDefault();y

    shoppingList.push(event.target[0]);

    displayItems();

    event.target.reset();
}

// const deleteButton = document.querySelector('.delete');
const deleteButton = select