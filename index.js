const taskContainer = document.querySelector(".task__containers");
let globalTaskData = [];


const generateHTML = (
  taskData
) => { ` <div id=${taskData.id} class="col-md-6 col-lg-4 my-4 ">
<div class="card">
  <div class="card-header gap-2 d-flex justify-content-end">
    <button class="btn btn-outline-info ">
      <i class="fad fa-pencil"></i>
    </button>
    <button class="btn btn-outline-danger" name=${taskData.id} onclick="deleteCard.apply(this, arguments)">
      <i class="fas fa-trash-alt" name=${taskData.id} ></i>
    </button>
  </div>
  <div class="card-body">
    <img src=${taskData.Image}
    <h5 class="card-title mt-4">${taskData.title}</h5>
    <p class="card-text">${taskData.description}</p>
    <span class="badge bg-primary">${taskData.type}</span>
    
  </div>
  <div class="card-footer ">
    <button class="btn btn-outline-primary">open task</button>
  </div>
</div>
</div> `};

const saveToLocalstorage = () => 
localStorage.setItem("taskyCA" , JSON.stringify({ cards: globalTaskData}));


const insertToDOM = (content) =>
  taskContainer.insertAdjacentHTML("beforeend", newCard);


const addNewCard = () => {
    //get task data
    const taskData = {
        id: `${Date.now()}`,//template literal
        title: document.getElementById("taskTitle").value,
        Image:document.getElementById("imageURL").value,
        type:document.getElementById("tasktype").value,
        description:document.getElementById("taskdesc").value,
    };


    globalTaskData.push(taskData);

    saveToLocalstorage();

//generate html code
const newCard = generateHTML(taskData);

insertToDOM(newCard);


//clear the form
document.getElementById("taskTitle").value = "";
document.getElementById("imageURL").value = "";
document.getElementById("tasktype").value = "";
document.getElementById("taskdesc").value = "";

return;

};

const loadExistingCards = () => {
  //check local storage
  const getData = localStorage.getItem("taskyCA");


  //pass json data  data
  if(!getData) return;

  const taskCards = JSON.parse(getData);

  globalTaskData = taskCards.cards;

  globalTaskData.map((taskData) => {

   //generate html code for those data
  const newCard = generateHTML(taskData);  
  insertToDOM(newCard);

  taskContainer.insertAdjacentHTML("beforeend", newCard);
  });
  return;


};

const deleteCard = (event) => {
    const targetID = event.target.getAttribute("name");
    const elementType = event.target.tagName;

    const removeTask = globalTaskData.filter((task) => task.id !== targetID);
    globalTaskData = removeTask;
    
    saveToLocalstorage();

    //access DOM to remove card
    if(elementType == "BUTTON"){
      return taskContainer.removeChild(
        event.target.parentNode.parentNode.parentNode
      );
    }

    
};