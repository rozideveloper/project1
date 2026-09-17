
let taskinput = document.querySelector("#taskinput");
let addbtn = document.querySelector("#addbtn");
let tasklist = document.querySelector("#tasklist");

addbtn.addEventListener("click", function () {

    let task = taskinput.value;

    if (task === "") {
        return;
    }

    let li = document.createElement("li");

    li.textContent = task;

    // Task complete
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Delete button
    let dltbtn = document.createElement("button");

    dltbtn.textContent = "Delete";

    li.appendChild(dltbtn);

    tasklist.appendChild(li);

    // Input empty
    taskinput.value = "";

    // Delete
  dltbtn.addEventListener("click", function (event) {

    event.stopPropagation();

    li.remove();

});
});