const taskContainer = document.querySelector(".task__containers");

const addNewCard = () => {
    //get task data
    const taskData = {
        id: `${Date.now()}`,//template literal
        title: document.getElementById("taskTitle").value,
        Image:document.getElementById("imageURL").value,
        type:document.getElementById("tasktype").value,
        description:document.getElementById("taskdesc").value,
    };
    console.log(taskData);


//generate html code
const newCard = ` <div id=${taskData.id} class="col-md-6 col-lg-4 my-4 ">
<div class="card">
  <div class="card-header gap-2 d-flex justify-content-end">
    <button class="btn btn-outline-info ">
      <i class="fad fa-pencil"></i>
    </button>
    <button class="btn btn-outline-danger">
      <i class="fas fa-trash-alt"></i>
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
</div> `;



//inject it to dom
//insert element html
taskContainer.insertAdjacentHTML("beforeend", newCard);




//clear the form
document.getElementById("taskTitle").value = "";
document.getElementById("imageURL").value = "";
document.getElementById("tasktype").value = "";
document.getElementById("taskdesc").value = "";

return;

};