let emailCustomer = sessionStorage.getItem('email');
window.dataLayer.push(
{ event: "NewsletterPardotFormSubmit" }, 
{   'event':'form_submit', 
    'enhanced_conversion_data': 
    { 
        "email": emailCustomer
    }
 }
);