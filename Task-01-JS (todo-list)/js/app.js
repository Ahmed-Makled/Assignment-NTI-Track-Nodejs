/**********************************************************
 * Define Global Variables
 *
 **********************************************************/
let btnAddTask = document.getElementById("btn-add");
let taskContent = document.querySelector(".task-content");
let TaskData = [];
/**********************************************************
 * End Global Variables
 *
 * Start Helper Functions
 *
 **********************************************************/
/**
 * @description Add New Task
 * @param
 * @return
 */
const addTask = () => {
  let input = document.querySelector("input").value;

  if (input == "") {
    document.querySelector(".valid").textContent = `Must Be Input Task`;
  } else {
    document.querySelector(".valid").textContent = ``;

    TaskData.push(input);

    taskContent.innerHTML += `
    <span class="task-box d-block bg-white p-3 mt-2">${input}
                              <span class="remove">X</span>
                          </span>
                          `;

    btnRemoveTask = document.querySelectorAll(".remove");

    btnRemoveTask.forEach((btn) => {
      btn.addEventListener("click", function () {
        this.parentNode.remove();
      });
    });
  }
  document.querySelector("input").value = "";
};
/**
 * @description Remove Task
 * @param e
 * @return
 */
const removeTask = (e) => {
  if (e.target.className == "remove") {
    e.target.parentNode.remove();
  }
};
/**********************************************************
 * End Helper Functions
 * Begin Main Functions
 *
 **********************************************************/
/**
 * @description Self Invoke function Get Data From api
 * @param
 * @return
 */
(async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1/todos");
  const data = await res.json();
  const sliceData = data.slice(0, 5);
  TaskData = sliceData;
  TaskData.forEach((element) => {
    taskContent.innerHTML += `
    <span class="task-box d-block bg-white p-3 mt-2">${element.title}
                              <span class="remove">X</span>
                          </span>
                          
    `;
  });

  btnRemoveTask = document.querySelectorAll(".remove");

  btnRemoveTask.forEach((btn) => {
    btn.addEventListener("click", function () {
      this.parentNode.remove();
    });
  });
})();
/**********************************************************
 * End Main Functions
 * Begin Events
 *
 **********************************************************/
// Event Click to add New Task
btnAddTask.addEventListener("click", addTask);
