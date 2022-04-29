const elements = document.querySelectorAll('p.required');
function Validate(element){    
    for(let i=0; i<elements.length; i++){
        let el = elements[i];
        if(el.querySelector(element)){
            el.querySelector(element).onblur = function(){ 
                if (el.querySelector(element).value === "" || el.querySelector(element).value.trim()==="") {
                    el.classList.add("custom_error");
                }
            };
        el.querySelector(element).onfocus = function(){                
                el.classList.remove("custom_error");
            };
    }}
}
Validate('input');
Validate('select');