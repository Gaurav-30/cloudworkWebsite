let slider = document.getElementById('myrange');
let output = document.getElementById('comp');
output.innerHTML = slider.value;
let count = 0;
slider.oninput = function(){
    output.innerHTML = this.value;
}


let addtodobutton = document.getElementById('addtodo');
let todocontainer = document.getElementById('todocontainer');

addtodobutton.addEventListener('click',function(){
    var div = document.createElement('div');  // main div
    div.className = 'tdcontainer';

    var paragraph = document.createElement('p');  // for complexity value 
    paragraph.innerText = "Complexity " + slider.value;

    var head = document.createElement('h4');   // TO show the workload
    head.innerText = 'Workload #' + count;
    count+=1;
    var p2 = document.createElement('p');  // To show the timer
      
    var timer = 10;
    p2.innerText ="Time Left:"+timer+" sec";
    var myvar = setInterval(function(){ 
        if(timer == 0){
            p2.innerHTML = "";
            clearInterval(myvar);
            btn.innerText = "Successful";
        }
        else{
        timer-=1;
        p2.innerText ="Time Left:"+timer + " sec";
        }
    },1000);
    var btn = document.createElement('button');  // button for sucess or failure
    btn.innerText = "Cancel";

    if(timer == 0){
        p2.innerHTML = "";
        clearInterval(myvar);
        btn.innerText = "Successful";
        btn.onclick = function(){done()};
        }

    btn.onclick = function() { myFunction()};

    function myFunction() {
    p2.innerHTML = "";
    clearInterval(myvar);
    if(timer != 0)
    btn.innerText = "Cancelled";
    }

    function done(){
        btn.innerText = "Successful";
    }

    paragraph.classList = 'para';
    head.classList = 'head';
    p2.classList = 'p2';
    btn.className = 'btn';
    div.appendChild(head);
    div.appendChild(paragraph);
    div.appendChild(p2);
    div.appendChild(btn);
    todocontainer.appendChild(div);
})















// let addtodobutton = document.getElementById('addtodo');
// let todocontainer = document.getElementById('todocontainer');
// let inputfield = document.getElementById('inputfield');

// addtodobutton.addEventListener('click',function(){
//     if(inputfield.value != ""){

//     var div = document.createElement('div');
//     div.className = 'paragraph-styling';
//     var paragraph = document.createElement('p');
//     // paragraph.classList.add('paragraph-styling');
//     paragraph.innerText = inputfield.value;
//     var p1 = document.createElement('p');
//     p1.innerText = "Bye";
//     div.appendChild(paragraph);
//     div.appendChild(p1);
//     todocontainer.appendChild(div);
//     inputfield.value = "";
//     paragraph.addEventListener('click',function(){
//         paragraph.style.textDecoration = 'line-through';
//     })
//     paragraph.addEventListener('dblclick',function(){
//         todocontainer.removeChild(paragraph);
//     })
// }
// })
