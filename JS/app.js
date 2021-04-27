'use strict'; 

let table = document.getElementById('table')
let allMobiles = [];

// Generating a random price using this function:

function getRndPrice(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  


// Building the constructor

function Mobile(name,type) {
    this.name = name;
    this.type = type;
    this.price = getRndPrice(100,500);
    this.condition = '';

    this.render();

    allMobiles.push(this);
}

// Creating a function to build the header of the table:

function tableHeader(){

    let headerRow = document.createElement('tr');
    table.appendChild(headerRow);

    let userTh = document.createElement('th');
    headerRow.appendChild(userTh);
    userTh.textContent = 'User';
    
    let typeTh = document.createElement('th');
    headerRow.appendChild(typeTh);
    typeTh.textContent = 'Type';

    let priceTh = document.createElement('th');
    headerRow.appendChild(priceTh);
    priceTh.textContent = 'Price';

    let conditionTh = document.createElement('th');
    headerRow.appendChild(conditionTh);
    conditionTh.textContent = 'Condition';


}

tableHeader();

// Creating a prototype function for rednering: 

Mobile.prototype.render = function(){

    // creating a row
    let dataRow = document.createElement('tr')
    table.appendChild(dataRow);

    // creating a data for user 
    let userData = document.createElement('td');
    dataRow.appendChild(userData);
    userData.textContent= this.name;

    // creating a data for type
    let typeData = document.createElement('td');
    dataRow.appendChild(typeData);
    typeData.textContent= this.type;

    // creating a data for price
    let priceData = document.createElement('td');
    dataRow.appendChild(priceData);
    priceData.textContent= this.price;

    // creating a data for condition 
    let conditionData = document.createElement('td');
    dataRow.appendChild(conditionData);
    if (this.price <200) {
        conditionData.textContent= 'Used';
        
    }else if (this.price >200){
        conditionData.textContent= 'New';
    }



}

// new Mobile('ahmad', 'Apple');
// console.log(allMobiles);




// Creating an event:

let form = document.getElementById('form')

form.addEventListener('submit',submitter);

function submitter(event){

    event.preventDefault();
    console.log(event);

    let userName = event.target.user.value;
    // console.log(userName);

    let mobileType = event.target.mobileType.value;
    // console.log(mobileType);


    new Mobile(userName,mobileType);

    // allMobiles.render();
   

    saveToLocal();


    


}



// Creating a function to save the data in local storage

function saveToLocal(){
    let mobileObjects = JSON.stringify(allMobiles);

    console.log(mobileObjects);

    localStorage.setItem('mobileData' , mobileObjects);
}


// Creating a function to get the data from the local storage

function gettingData() {

    let storedData = localStorage.getItem('mobileData');

    let storedObjects = JSON.parse(storedData);
    console.log(storedObjects);

    if (storedObjects !== null) {
        for (let i = 0; i < storedObjects.length; i++) {
            
            new Mobile (storedObjects[i].name , storedObjects[i].type)
            
        }
        
    }
    
}

gettingData();




// Stretch Goal: 

let clearAll = document.createElement('button')
form.appendChild(clearAll);
clearAll.textContent= 'Clear All'

clearAll.addEventListener('click',clear);

function clear() {

    table.textContent = '';
    deleteItems();
    tableHeader();

    
}


// Creating a function to clear the local storage:

function deleteItems() {
   localStorage.clear();
  }
  
