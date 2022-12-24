const userData = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "Karen", age: "19", profession: "admin" }
]

const filterBtn = document.getElementById("btn");
filterBtn.addEventListener("click", filter);
let container = document.getElementById("display");
const element = document.getElementById("submitBtn");
element.addEventListener("click", addUser);

function myFunction() {
    container.innerHTML = "";
    userData.forEach(element => {
        const content = `
        <div class="card">
        <p>${element.id}.</p>
        <p>Name : ${element.name.charAt(0).toUpperCase() + element.name.slice(1)}</p>
        <p>Profession : ${element.profession.charAt(0).toUpperCase() + element.profession.slice(1)}</p>
        <p>Age : ${element.age}</p>
        </div>
        `
        container.innerHTML += content;
    });
}

function filter() {
    const dropValue = document.getElementById("dropdown").value;
    if (dropValue == '') {
        alert("Please select the Profession from dropdown.")
        return
    }
    container.innerHTML = "";
    userData.forEach(element => {
        if (element.profession == dropValue) {
            const content = `
                <div class="card">
                <p>${element.id}.</p>
                <p>Name : ${element.name.charAt(0).toUpperCase() + element.name.slice(1)}</p>
                <p>Profession : ${element.profession.charAt(0).toUpperCase() + element.profession.slice(1)}</p>
                <p>Age : ${element.age}</p>
                </div>
                `
            container.innerHTML += content;
        }
    });
}

function addUser() {
    const name = document.getElementById("name").value;
    const profession = document.getElementById("profession").value;
    const age = document.getElementById("age").value;
    if (name == '' || profession == '' || age == '') {
        alert("Please enter all form fields.")
        return
    }
    const obj = {
        id: userData.length + 1,
        name: name,
        age: age,
        profession: profession
    }
    userData.push(obj);
    myFunction();
    document.getElementById("dropdown").selectedIndex = 0;
    console.log(userData);
}