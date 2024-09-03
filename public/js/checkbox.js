const fCheckbox = document.querySelectorAll(".fCheckbox");
const iCheckbox = document.querySelectorAll(".iCheckbox");
const checklist = document.querySelectorAll(".checklist");

fCheckbox.forEach((element, i) => {
    element.addEventListener("click", () => {
        if (checklist[i].classList.contains("opacity-0")) {
            checklist[i].classList.remove("opacity-0");
            iCheckbox[i].checked = true;
            console.log("🚀 ~ fCheckbox.addEventListener ~ iCheckbox[i].checked:", iCheckbox[i].checked);
        } else {
            checklist[i].classList.add("opacity-0");
            iCheckbox[i].checked = false;
            console.log("🚀 ~ fCheckbox.addEventListener ~ iCheckbox[i].checked:", iCheckbox[i].checked);
        }
    });
});
