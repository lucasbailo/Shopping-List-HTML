const foodName = document.getElementById('first-input');
const itemType = document.getElementById('type-input');
const itemList = document.getElementById('shopping-list');

const fullItemList = [];
const sections = [];

function itemAdd() {
  createItem(foodName.value,itemType.value);
  foodName.value = '';
  itemType.value = '';
  printItems();
}

// function to create an item

function createItem (name, section) {
  let item = {
    name: name,
    section: section
  }
  
  fullItemList.push(item);
  addSection(item.section);  
}

function printItems() {
  itemList.innerHTML = "";
  // creating a section for each item
 
  for (let i = 0; i < sections.length; i++) {
    
    let sectionDiv = document.createElement('div');
    sectionDiv.id = sections[i];
    sectionDiv.innerHTML = `<h2>${sections[i]}</h2>`;
    itemList.appendChild(sectionDiv)
    
    // checkbox insertion
    
    fullItemList.filter((element) => {
      if (element.section == sections[i]) {
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `${element.name}`;
        checkbox.value = `${element.name}`;

        let listLabel = document.createElement('label');
        listLabel.setAttribute('for',element.name);
        listLabel.innerHTML = `${element.name}`;

        let findItem = document.getElementById(element.section);
        findItem.appendChild(checkbox);
        findItem.appendChild(listLabel);
      }  
    });
  }
}



// add a section if it doesn't exist yet

function addSection(sect) {
  if (sections.includes(sect) == false) {
    sections.push(sect);
  }
}
