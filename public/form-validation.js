let elements = document.querySelectorAll('p.required');
let inputs = document.querySelectorAll('p.required>input');
let selects = document.querySelectorAll('p.required>select');
            
for(let i=0; i<elements.length; i++){
        let el = elements[i];
        let input = el.querySelector('input');
        if(input){
        input.onblur = function() {        
        if (input.value === "") {
        input.style.border = "1px solid red";
        el.querySelector('span.error_text').style.display = "block";
        el.querySelector('label').style.color="red";
        }
        };

    input.onfocus = function() {
        
        this.style.border = "1px solid #00b1ea";
        el.querySelector('span.error_text').style.display = "none";
        el.querySelector('label').style.color="black";
    };
}}

for(let i=0; i<elements.length; i++){
    let el = elements[i];
    let select = el.querySelector('select');
    if(select){
    select.onblur = function() {
        
        if (select.value === "") {
        select.style.border = "1px solid red";
        el.querySelector('span.error_text').style.display = "block";
        el.querySelector('label').style.color="red";
        }
        };
    select.onfocus = function() {
        
        this.style.border = "1px solid #00b1ea";
        el.querySelector('span.error_text').style.display = "none";
        el.querySelector('label').style.color="black";
    };
}}