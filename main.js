let unknowenButton_input = document.getElementById("unknowenButton_input");
let input_nameFirst = document.getElementById("input_nameFirst");
let input_nameLast = document.getElementById("input_nameLast");
let label = document.getElementById("label");
let label2 = document.getElementById("label2");


function Unknowen(){
unknowenButton_input.onclick = function(){
    input_nameFirst.style.display= 'none';
    input_nameLast.style.display= 'none';
    label.style.display= 'none';
    label2.style.display= 'none';
    unknowenButton_input.value='Knowen?'
    know();
}
}
function know(){
    unknowenButton_input.onclick = function(){
    input_nameFirst.style.display= 'flex';
    input_nameLast.style.display= 'flex';
    label.style.display= 'flex';
    label2.style.display= 'flex';
    unknowenButton_input.value='Unknowen'
    Unknowen();
}
}
Unknowen();