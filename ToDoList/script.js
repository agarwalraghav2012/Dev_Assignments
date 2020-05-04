window.onload = function() {
let inptask = document.getElementById('task')
let addbtn = document.getElementById('add')
let list = document.getElementById('list')
let item = document.getElementsByTagName("li");


addbtn.onclick = function () {
    let lis = document.createElement('li');
    lis.innerText = inptask.value ;
    let dbtn = document.createElement('button') ;
    dbtn.innerText = 'X'
    lis.appendChild(dbtn)
    inptask.value = ""

    list.appendChild(lis) ;

    dbtn.onclick = function(ev) {
        ev.target.parentElement.remove() ;
    }

    lis.onclick = function(ev) {
        ev.target.style.backgroundColor = "lightgreen" ;
        ev.target.style.color = "black" ;
    }

}
}
