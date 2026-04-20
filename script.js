// document.getElementById("form").addEventListener("submit")

let form = document.getElementById("form")
const allTasks = []

const validateForm = (event) => {
    event.preventDefault()

    let display = document.getElementById("display")
    let userInput = event.target.ui

    // display.innerHTML = "hello"

    // allTask.forEach((task) => {
    //     console.log(task);
    // });
    // difference between forEach() and Map()

    allTasks.push(userInput.value);
    
    display.innerHTML +=
        allTasks.map((task) =>
            `<li> ${task} <button>delete</button> </li>`
    );

    userInput.value = "";

    // allTask.push(event.target.ui.value)
    // // console.log(event.target.ui.value);
    console.log(allTasks);
};

form.addEventListener('submit', validateForm)