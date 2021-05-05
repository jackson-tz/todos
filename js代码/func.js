function changeAllCheckbox(){
     //3.4获取所有的复选框
     let allItems = document.querySelectorAll(".todo-main>li>label>input").length
     //3.5获取所有选中的复选框
     let allCheckedItems = document.querySelectorAll(".todo-main>li>label>input:checked").length;
     //3.6获取todo-footer中的复选框元素
     let footer_input = document.querySelector(".todo-footer input")
    if( allItems === allCheckedItems ){ 
        footer_input.checked = "checked"
     }else{
         footer_input.checked = null;
     } 
}

function isShow(){
    let o_todo_main = document.querySelector(".todo-main")
    let olis = o_todo_main.querySelectorAll("li")
    olis.length
    ? show()
    : hide(); 
}

function hide(){
    let o_todo_main = document.querySelector(".todo-main")
    let o_todo_footer = document.querySelector(".todo-footer")
    o_todo_main.style.display = "none";
    o_todo_footer.style.display = "none";
    let todo_wrap_h2 = document.createElement("h2")
    todo_wrap_h2.textContent = "恭喜你，没有要完成的任务"
    o_todo_wrap.appendChild(todo_wrap_h2)
}


function show(){
    let o_todo_main = document.querySelector(".todo-main")
    let o_todo_footer = document.querySelector(".todo-footer")
    if(document.querySelector("h2")){document.querySelector("h2").remove()}
    o_todo_main.style.display = "block";
    o_todo_footer.style.display = "block";
}

function showListNum(){
    let todoNumAll = document.querySelectorAll(".todo-main>li").length;
    let doneTodoNumAll = document.querySelectorAll(".todo-main>li input:checked").length;
    let doneNum = document.querySelector(".todo-footer>span #doneNum");
    let totalNum = document.querySelector(".todo-footer>span #totalNum");
    doneNum.textContent = doneTodoNumAll;
    totalNum.textContent = todoNumAll;
}