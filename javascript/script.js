let message = document.getElementById("messages");
let uppercase = document.querySelector(".Uppercase");
let lowercase = document.querySelector(".Lowercase");
let extraspace = document.querySelector(".extraspace");



let clear = document.querySelector(".Clear");

message.addEventListener('input',(e)=>{
   let word = document.getElementById("word");
   let lengths = document.getElementById("length");
   let tlength = message.value.length;
   lengths.innerText = tlength;

//    for word count 
  let wlength = message.value.split(' ');
  console.log(wlength);
})

uppercase.onclick = (e)=>{
    e.preventDefault();
    // message.value.toUpperCase();
    message.value = message.value.toUpperCase();
}

lowercase.onclick = (e)=>{
    e.preventDefault();
    // message.value.toUpperCase();
    message.value = message.value.toLowerCase();
}

clear.onclick = (e)=>{
    e.preventDefault();
    // message.value.toUpperCase();
    message.value = "";
}
