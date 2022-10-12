filterSelection("all")
function filterSelection(c){
    let x = document.querySelectorAll(".column");
    if(c == "all"){
        c = "";
    }
    let xArray = Array.from(x);
    xArray.map((item)=>{
        w3RemoveClass(item, "show");
        if(item.className.indexOf(c) > -1){
            w3AddClass(item, "show");
        }
    });
}
function w3AddClass(element, name){
    arr1 = element.className.split(" ");
  arr2 = name.split(" ");
    arr2.map((item)=>{
        if (arr1.indexOf(item) == -1) {element.className += " " + item;}
    });
}
function w3RemoveClass(element, name){
    let arr1 = element.className.split(" ");
    let arr2 = name.split(" ");
    for(let i = 0; i < arr2.length; i++){
        while(arr1.indexOf(arr2[i]) > -1){
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}
// Add active class to the current button (highlight it)
let btnContainer = document.querySelector(".myBtnContainer");
let btns = btnContainer.getElementsByClassName("btn");
let btnsArray = Array.from(btns);
btnsArray.map((item)=>{
    item.addEventListener("click", function(){
        let current = document.querySelectorAll(".active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    })
});