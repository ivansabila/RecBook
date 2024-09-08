// select all "fCheckbox", "iCheckbox" and "checklist" class
const fCheckbox = document.querySelectorAll(".fCheckbox");
const iCheckbox = document.querySelectorAll(".iCheckbox");
const checklist = document.querySelectorAll(".checklist");

// looping "fCheckbox" for manipulate checkbox
fCheckbox.forEach((element, index) => {
    element.addEventListener("click", () => {
        // check if checkbox while un-checked or checked by existence "opacity-0" class
        if (checklist[index].classList.contains("opacity-0")) {
            element.classList.add("bg-basic");
            checklist[index].classList.remove("opacity-0");
            checklist[index].style.transition = "all 400ms";
            iCheckbox[index].checked = true;
        } else {
            element.classList.remove("bg-basic");
            checklist[index].classList.add("opacity-0");
            iCheckbox[index].checked = false;
        }
    });
});
