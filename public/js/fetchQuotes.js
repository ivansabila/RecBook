// select all "todo-content" and "fa-xmark" class
const todos = document.querySelectorAll(".todo-content");
const xBtns = document.querySelectorAll(".fa-xmark");

// select all "fCheckbox" and "checklist" class
const fCheck = document.querySelectorAll(".fCheckbox");
const check = document.querySelectorAll(".checklist");

// array for "data(s)-id"
let dataId = [];

// looping "xBtns" for manipulate btn
xBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        // empty the array "dataId"
        dataId = [];

        // insert attribute "data-id" to array "dataId"
        xBtns.forEach((dataIds) => dataId.push(dataIds.getAttribute("data-id")));

        // get "data-index" from button clicked
        let index = btn.getAttribute("data-index");

        // make a random number which range 1-254 (except value of array "dataId")
        let randNumber = Math.floor(Math.random() * 254 + 1);

        // prepare "randNumber" to right format to send
        const params = new URLSearchParams();
        params.append("randNumber", randNumber);

        // call API by the "randNumber" as id
        fetch("/quotes", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: params.toString(),
        })
            .then((response) => response.json())
            .then((data) => {
                // insert data to frontend
                todos[index].classList.add("opacity-0");
                todos[index].style.transition = "all 400ms";
                setTimeout(() => {
                    todos[index].innerText = data.todo;
                    xBtns[index].setAttribute("data-id", data.id);
                    todos[index].classList.remove("opacity-0");
                    fCheck[index].classList.remove("bg-basic");
                    check[index].classList.add("opacity-0");
                }, 200);
            });
    });
    // insert attribute "data-id" to array "dataId" at the first
    dataId.push(btn.getAttribute("data-id"));
});
