let emailCustomer = sessionStorage.getItem('email'); 
window.dataLayer.push( 
{ event: "PardotFormSubmit" },  
{ 
  'event':'form_submit', 
  'enhanced_conversion_data': { 
    "email": emailCustomer 
  } 
  } 
); 
//<script type="text/javascript" src="https://go.materialise.com/data-layer-all.js"></script>