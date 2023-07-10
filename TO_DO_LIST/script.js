document.querySelector("#push").onclick = function () {
  if (document.querySelector("#Newtasks input").value.length == 0) {
    alert("Please enter a task ");
  } else {
    document.querySelector("#tasks").innerHTML += `
        <div class="task">
           <span id="task name">
           ${document.querySelector("#Newtasks input").value}
           </span>
           <button  class="delete">
           <i class="fa-solid fa-trash"></i>
        </div>
        `;
        document.querySelector("#Newtasks input").value = "";

    var current_tasks = document.querySelectorAll(".delete");
    console.log(typeof current_tasks);
    for  (var i = 0; i < current_tasks.length; i++){
        current_tasks[i].onclick = function () {
                    this.parentNode.remove();
                };
    }
  }
};
