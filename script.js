const menulist= document.getElementById("menulist");
menulist.style.maxHeight="0px";

function menutoggle(){
    if (menulist.style.maxHeight=="0px"){
        menulist.style.maxHeight="100vh";


    }else{
        menulist.style.maxHeight="0px"
    }

}
 const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
 }


 ScrollReveal().reveal(".carousel-caption-heading-1",{
    ...scrollRevealOption,
 });


 
 ScrollReveal().reveal(".carousel-caption-para",{
    ...scrollRevealOption,
    delay: 500,
 });

 ScrollReveal().reveal(".carousel-caption-btn",{
    ...scrollRevealOption,
    delay: 800,
 });


 ScrollReveal().reveal(".about-img",{
    ...scrollRevealOption,
    origin: "right",
 })

 ScrollReveal().reveal(".heading h1, h2",{
    ...scrollRevealOption,
   
 });

 ScrollReveal().reveal(".main-heading, .decription, .address, .mob-number",{
    ...scrollRevealOption,
    delay: 500,
 });

 ScrollReveal().reveal(".decription, .address, .mob-number",{
    ...scrollRevealOption,
    delay: 1000,
 });
 ScrollReveal().reveal(".address, .mob-number",{
    ...scrollRevealOption,
    delay: 1500,
 });


 ScrollReveal().reveal(".bookbtn",{
    ...scrollRevealOption,
    delay: 1800,
 });

 ScrollReveal().reveal(".service-title",{
    ...scrollRevealOption,
    delay: 200,
 });

 ScrollReveal().reveal(".list-1",{
    ...scrollRevealOption,
    origin: "right",
    

 });

 ScrollReveal().reveal(".list-2",{
    ...scrollRevealOption,
    origin: "right",
    delay: 500,

 });

 ScrollReveal().reveal(".list-3",{
    ...scrollRevealOption,
    origin: "right",
    delay: 1000,

 });

 ScrollReveal().reveal(".list-4",{
    ...scrollRevealOption,
    origin: "right",
    delay: 1500,

 });



 ScrollReveal().reveal(".gallary-heading" ,{
    ...scrollRevealOption,
   
 })





 let contactFormEl = document.getElementById("contactForm");

 let contactData = {
    firstName: "",
    lastName: "",
    emailAdress: "",
    number: "",
    message: ""
 }



let firstNameEl =document.getElementById("firstName");
let firstNameErrMsgEl= document.getElementById("firstNameErrMsg");
let lastNameEl =document.getElementById("lastName")
let lastNameErrMsgEl =document.getElementById("lastNameErrMsg");
let emailAdressEl= document.getElementById("emailAdress");
let emailErrMsgEl =document.getElementById("emailErrMsg");
let numberEl = document.getElementById("number");
let numberErrMsgEl = document.getElementById("numberErrMsg");
firstNameEl.addEventListener("change", function(event){
    if(event.target.value===""){
        firstNameErrMsgEl.textContent ="Required*";

    }
     else{
        firstNameErrMsgEl.textContent = "";
     }

     contactData.firstName=event.target.value;
});

lastNameEl.addEventListener("change" , function(event){
    if  (event.target.value ===""){
        lastNameErrMsgEl.textContent = "Required*";
    }
    else{
        lastNameErrMsgEl.textContent = "";

    }
    contactData.lastName=event.target.value;
})

emailAdressEl.addEventListener("change" , function(event){
    if(event.target.value===""){
        emailErrMsgEl.textContent = "Requried*";
    }
    else{
        emailErrMsgEl.textContent ="";
    }
    contactData.emailAdress=event.target.value;
});
numberEl.addEventListener("change", function(event){
if(event.target.value===""){
    numberErrMsgEl.textContent="Required*";
}
  
else{
    numberErrMsgEl.textContent="";
}
contactData.number = event.target.value;
})

function validationContactData(contactData){
    let {firstName, lastName, emailAdress, number, message}=contactData;
    if (firstName===""){
        firstNameErrMsgEl.textContent="Riquried*";
    }
    else{
        firstNameErrMsgEl.textContent="";
    }
    if (lastName===""){
        lastNameErrMsgEl.textContent="Riquried*";
    }
    if (emailAdress===""){
        emailErrMsgEl.textContent="Riquried*";
    }
    if (number===""){
        numberErrMsgEl.textContent="Riquried*";
    }
    
}

contactFormEl.addEventListener("submit" , function(event){
    event.preventDefault();
    validationContactData(contactData);
})
