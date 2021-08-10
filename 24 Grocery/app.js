// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const grocery = document.getElementById('grocery');
const form = document.querySelector('.grocery-form');
const groceryList = document.querySelector('.grocery-list');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const clearBtn = document.querySelector('.clear-btn');
form.addEventListener('submit', addItem);


function addItem(e) {
    e.preventDefault();
    const text = grocery.value;
    if (Boolean(text)) {
        const element = document.createElement('article');
        element.classList.add('grocery-item');

        element.innerHTML = `<p class="title">${text}</p>
        <div class="btn-container">
          <!-- edit btn -->
          <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
          </button>
          <!-- delete btn -->
          <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      `;
        groceryList.appendChild(element);
        grocery.value = "";
        container.classList.add("show-container");
    }

    // const deleteBtnS = document.querySelectorAll('.delete-btn');
    // deleteBtnS.forEach((btn) => {
    //     btn.addEventListener('click', deleteItem);
    // })
    const deleteBtn = document.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);

    const editBtn = document.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);

}

function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    groceryList.removeChild(element);
    
}
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    editElement = e.currentTarget.parentElement.previousElementSibling;
    grocery.value = editElement.innerHTML;
    //
    submitBtn.textContent = "edit";
  }
  