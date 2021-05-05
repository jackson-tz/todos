// 获取到的数据
var todolist = [
    {
      id: 1,
      todoName: '123',
      isDone: true,
    },
    {
      id: 2,
      todoName: '456',
      isDone: false,
    },
  ];

// 获取元素
let o_todo_main = document.querySelector(".todo-main")
let o_todo_footer = document.querySelector(".todo-footer")
let o_todo_wrap = document.querySelector(".todo-wrap")
let oInput = document.querySelector(".todo-header input")
//1. 判断是否有数据，有则展示todo-main和todo-footer，没有则隐藏,并提示用户
if (todolist.length){
    //1.1 获取数据
    var htmlArr = todolist.map(function(item,index){
        // 1.2判断任务是否完成,生成相对应的内容插入到todo-main当中
        if(item.isDone){
            return '<li>\
            <label>\
                <input type="checkbox" checked/>\
                <span class="done">' +item.todoName +'</span>\
            </label>\
            <button class="btn btn-danger">删除</button>\
            </li>'
        }else{
          return '<li>\
            <label>\
                <input type="checkbox"/>\
                <span>' +item.todoName +'</span>\
            </label>\
            <button class="btn btn-danger">删除</button>\
            </li>'
        }
    })
 // 1.3将获取的内容插入到todo-main中
o_todo_main.innerHTML = htmlArr.join('')
//动态展示所有任务向的个数和已经完成的任务项个数
showListNum()
}else{
    hide()
}

//2.实现添加任务逻辑
//2.1给表单添加键盘抬起事件
oInput.onkeyup = function(e){
    //2.2判断抬起的键是否为回车键
    if(e.keyCode === 13){
        //2.3先去除表单输入的内容中两边空格
        let value = oInput.value.trim()
        //2.4判断表单中是否输入内容,生成对应的内容,如果没有
        if(!value) return oInput.value = '';  
            let liHtml = '<label>\
            <input type="checkbox"/>\
            <span>' + value +'</span>\
            </label>\
            <button class="btn btn-danger">删除</button>'
            let li = document.createElement('li')
            li.innerHTML = liHtml;
            o_todo_main.appendChild(li)
            //2.6删除表单里的内容
            oInput.value = ''; 
            //2.5输入任务后隐藏h2，展示
            isShow();
            changeAllCheckbox()  
            showListNum()  
        
    }
}

//3.实现更新任务项的状态
//3.1获取所有任务项的input[checkbox],并且给它们注册点击事件
let oInputs = document.querySelectorAll(".todo-main>li>label>input");
    o_todo_main.onclick = function(e){
        //3.2判断点击的这个复选框是否被选择，如果是则给相对应的span标签添加done属性
        if(e.target.tagName.toLowerCase() === "input"){
            let ischecked = e.target.checked
            let span = e.target.nextElementSibling
            if(ischecked){
            span.setAttribute("class","done")
            }else{
                span.removeAttribute("class")
            }
        }  
        //3.3判断任务栏中的任务是否全部完成，若是，则选中todo-footer中的复选框
       changeAllCheckbox() 
       showListNum()   
    }

//4.点击任务项的删除按钮，删除当前任务项
//给btn-danger创建点击事件
o_todo_main.onclick = function(e){
    o_todo_main.querySelectorAll("input").forEach(function(item){
        var ischecked = item.checked
        ischecked 
        ? item.nextElementSibling.setAttribute("class" , "done")
        : item.nextElementSibling.removeAttribute("class")
    })
    if(e.target.tagName.toLowerCase() === "button"){
        e.target.parentNode.remove()
    }
    changeAllCheckbox();  
    showListNum()
    isShow(); 
}

//5.全选按钮的点击事件逻辑,当选中全选按钮，则其它按钮都选中,反之则都不选中
//5.1获取全选按钮元素
var footer_input = document.querySelector(".todo-footer input");
footer_input.onclick = function(){
    let o_todo_main_Inputs = document.querySelectorAll(".todo-main input")
    console.log(footer_input.checked)
    console.log(o_todo_main_Inputs)
    //5.2当选中全选按钮,则其它按钮都选中
    if(footer_input.checked){
        o_todo_main_Inputs.forEach(function(item){
            item.checked = "checked"
            item.nextElementSibling.setAttribute("class","done")
        })
    }else{
        o_todo_main_Inputs.forEach(function(item){
            item.checked = null;
            item.nextElementSibling.removeAttribute("class")
        })
    }
    showListNum()
}

//6.删除所有选中的任务项
let todo_footer_button = document.querySelector(".todo-footer button");
todo_footer_button.onclick = function(){
    let allChecked = document.querySelectorAll(".todo-main>li input:checked");
    allChecked.forEach(function(item){
        item.parentNode.parentNode.remove()
    })
    changeAllCheckbox();  
    showListNum();
    isShow(); 
}


