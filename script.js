let image=document.getElementById("imagebox")
let qrimg=document.getElementById("qrimg")
let qrinput=document.getElementById("qrinput")
let button=document.getElementById("btn")

button.addEventListener('click' ,function () {
          if (qrinput.value.length > 0) {
                    
                    qrimg.src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=he" + qrinput.value;
                    image.classList.add("showimg")
          }
          else{
                    alert("please inter any text or url")
          }
          
})