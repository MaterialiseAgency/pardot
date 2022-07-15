// modal functionality

// toogleModal = (event) => {  
//   document.getElementById("modal").classList.toggle("modal");
// };

const link = document.getElementsByClassName("register-link");
Array.from(link).forEach(function(elem) {  
  elem.onclick = function(){    
    if(elem.href !== location.href){
      document.getElementById("modal").style.display = "none";
    }else{
      document.addEventListener('click', function (e) {
            if (e.target.id === elem.id) {
                e.preventDefault();
            }
        });
      toogleModal = (event) => {  
        document.getElementById("modal").classList.toggle("modal");
      }
    };
  };
});
