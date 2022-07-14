// modal functionality

// toogleModal = (event) => {  
//   document.getElementById("modal").classList.toggle("modal");
// };
let book_url = document.getElementById("book-link").href;
        let book_link = document.getElementById("book-link");
        if(book_url !== location.href){
             document.getElementById("modal").style.display = "none";
          }else{
          document.addEventListener('click', function (e) {
            if (e.target.id === book_link.id) {
                e.preventDefault();
            }
        });
          toogleModal = (event) => {  
            document.getElementById("modal").classList.toggle("modal");
          }
        };

let url = document.getElementById("register-link").href;
let link = document.getElementById("register-link");
        
if(url !== location.href){
  document.getElementById("modal").style.display = "none";
}else{
  document.addEventListener('click', function (e) {
        if (e.target.id === link.id) {
            e.preventDefault();
        }
    });
  toogleModal = (event) => {  
    document.getElementById("modal").classList.toggle("modal");
  }
};
