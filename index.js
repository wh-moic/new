let myImgage = document.querySelector('img');

myImgage.onclick = function() {
    let mySrc = myImgage.getAttribute('src');
    if(mySrc === './imgs/1.jpg') {
        myImgage.setAttribute('src', './imgs/4.jpg');
    } else {
        myImgage.setAttribute('src', './imgs/1.jpg')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'mozilla, ' + myName;
    }
    
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'mozilla, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}