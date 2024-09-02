let btn = document.querySelector("button");
btn.addEventListener("click",create);

function create(){
    let inp = document.querySelector("input");
    let ol = document.querySelector("ol");

    let newLi = document.createElement("li");
    newLi.innerText=inp.value;
    ol.appendChild(newLi);
    inp.value = "";

    let del = document.createElement("button");
    del.innerText = "Delete";
    del.setAttribute('class',"deleteButton");
    newLi.appendChild(del);
}

let ol = document.querySelector("ol");
ol.addEventListener("click" , function(event){
    if(event.target.nodeName == "BUTTON"){
        let delItem = event.target.parentElement;
        delItem.remove();
    }
});


// // this will not work , so we have to use event delegation.Instead of accessing the delete buttons , we will access its parent element like <ol>.
// let delBtns = document.querySelectorAll(".deleteButton");

// for (delBtn of delBtns){
//         delBtn.addEventListener("click",function () {
//             let par = this.parentElement;
//             console.log(par);
//             par.remove();
//         });
// };




