

 

                    // type two use sometimes
  
function blue(){
    document.body.style.backgroundColor = 'blue';
}

function pink(){
    document.body.style.backgroundColor = 'pink';
}


                    // type three
const makeTomato = document.getElementById("make-tomato");
makeTomato.onclick =colorTomato;
function colorTomato(){
document.body.style.backgroundColor = "tomato";
}


            // type three point five

const makePurple =document.getElementById("purple");
makePurple.onclick = function makeKoroPurple() {
    document.body.style.backgroundColor = "purple";
}

                    // type four
const makeBlack =document.getElementById("black");
makeBlack.addEventListener('click',blacki)
    
    function blacki(){
    document.body.style.backgroundColor = "black";
}



const makeGreen =document.getElementById("make-green");
makeGreen.addEventListener("click" , function ckickgreen(){
    document.body.style.backgroundColor = "green";
})


                    // type five important we will use sometimes
document.getElementById("orange").addEventListener("click",function orangef(){
    document.body.style.backgroundColor = "orange";
})



            // h1 ar leka btn dea change
function change(){
    const change = document.getElementById("handler");
    change.innerText ="leka ta poriborton koraholo";
}

            // onno babe h1 ar leka btn dea change

document.getElementById("updatebtn").addEventListener("click",function(){
    const btnc=document.getElementById("kakijaga");
    btnc.innerText="good work";
})


            // update btn click korle input k pabe
            document.getElementById("submittede").addEventListener('click',function(){
                const box=document.getElementById("inputbox");
                const boxb =box.value;
            
                const rako =document.getElementById("akane");
                rako.innerText=boxb;
            })



            // textarea ar maje kisu likle oita alad p tag  asho korbe

document.getElementById("newarea").addEventListener('click',function(){
    const text= document.getElementById("ttexta");
    const inputText=text.value;

    const rakon =document.getElementById("rako");
    const p=document.createElement("p");
    p.innerText=inputText;
    rakon.appendChild(p);
    inputText.value= "";
    
})


            // if type delete in the input then btn will appear neither nor
  document.getElementById('inputt').addEventListener('keyup',function(event){
 const text1=event.target.value;
 const deletebutton=document.getElementById('deletebtn');
    if(text1 === "delete"){
        deletebutton.removeAttribute("disabled");
     }else{
        deletebutton.setAttribute("disabled",true);
     }
})

                // bubble propagation off kora

document.getElementById('father').addEventListener('click',function (event){
console.log('clicked ul')

})
 document.getElementById('items2').addEventListener('click',function(event){
    console.log('clicked li 1');
   

 })
 document.getElementById('items2').addEventListener('click',function(event){
    console.log('clicked li 1 snd time');
    event.stopPropagation();

 })

 document.getElementById('items1').addEventListener('click',function(event){
    console.log('clicked li 1');
    event.stopPropagation()

 })
 document.getElementById('items1').addEventListener('click',function(event){
    console.log('clicked li 1ssssssss');
    

 })
 document.getElementById('body').addEventListener('click',function(){
    console.log('clicked body');
   

 })




                    // click korle disappear and appear li




// const items=document.getElementsByClassName('item');
// for(const item of items){
//     item.addEventListener('click',function(event){
//         event.target.parentNode.removeChild(event.target);
//     })
    
// }

document.getElementById('listul').addEventListener('click',function(event){
    event.target.parentNode.removeChild(event.target);
})  


document.getElementById('add-btn-new').addEventListener('click',function(){
    const listcontainer= document.getElementById("listul");
   const li = document.createElement("li");
   li.innerText='brand new items comming';
   li.classList.add('item');
   listcontainer.appendChild(li);

})