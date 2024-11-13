const form =document.querySelector('.contact_form');
function sendMsg(e){
 
const name = document.querySelector('.name'),
      email= document.querySelector('.email'),
      msg = document.querySelector('.msg');



 email.send({
  SecureToken : " ",
  To : 'mazdakm1368@gmail.com' ,
  From : email.value,
  Subject : "contact form",
  Body : msg.value
}).then(
message => alert(message)
);



}
form.addEventListener('submit', sendMsg);