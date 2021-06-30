/**********************************************************
 * Define Global Variables
 *
 **********************************************************/
let todoContent = document.querySelector(".todo-content");
/**********************************************************
 * End Global Variables
 *
 * Start Mian Functions
 *
 **********************************************************/

/**
 * @description get data from api
 * @param baseurl
 * @return sliceData
 */
const GetData = async () => {
  const res = await fetch("/all");

  try {
    const data = await res.json();
    data.forEach((element) => {
      todoContent.innerHTML += `

      <div class="col-3">
      <div class="card border-secondary mb-3" style="max-width: 25rem; min-height:15rem">
          <div class="card-header" id="id">ID: ${element.id}</div>
          <div class="card-body text-secondary">
              <h5 class="card-title" id="title">Secondary Title: ${element.title}</h5>

          </div>
      </div>
  </div>
      `;
    });
  } catch (error) {
    console.log("error", error); //  handle the error
  }
};

/**********************************************************
 * End Main Functions
 * Begin Events
 *
 **********************************************************/
// Callback Function
// performAction();
GetData();
