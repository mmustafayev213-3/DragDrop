let fruit=document.querySelectorAll(".fruit");
let vegetable=document.querySelectorAll(".vegetable");
let fruitsbasket=document.querySelector(".fruits");
let vegetablebasket=document.querySelector(".vegetables");


fruit.forEach(item => {
    item.addEventListener("dragstart",function (e) {
        e.dataTransfer.setData("fId",this.id);
    })
});
fruitsbasket.ondragover=function (e) {
    e.preventDefault();
}
fruitsbasket.ondrop=function (e) {
    let data=e.dataTransfer.getData("fId");
    this.appendChild(document.getElementById(data))
}
vegetable.forEach(item => {
    item.addEventListener("dragstart",function (e) {
        e.dataTransfer.setData("vId",this.id);
    })
});
vegetablebasket.ondragover=function (e) {
    e.preventDefault();
}
vegetablebasket.ondrop=function (e) {
    let dara=e.dataTransfer.getData("vId");
    this.appendChild(document.getElementById(dara))
}


