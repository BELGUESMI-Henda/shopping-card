let globallist = Array.from(document.getElementsByClassName('globallist')) ;
let productList =Array.from(document.getElementsByClassName('product-list'));
let article=Array.from(document.getElementsByClassName('article'));
let heart= Array.from(document.getElementsByClassName('heart'));
let plus = Array.from(document.getElementsByClassName('plus')) ;
let minus = Array.from(document.getElementsByClassName('minus'));
var price = Array.from(document.getElementsByClassName("price")) ;
let counter = Array.from(document.getElementsByClassName('counter'));
let total = Array.from(document.getElementsByClassName('total'));
let pricetotal= document.getElementsByClassName('price-total');

//heart color
function changeColor(el)
{
if(el.target.style.color !== 'red' ){
    el.target.style.color = 'red'
}else {

    el.target.style.color = 'black'
}




}
//counter et somme
function calculateSum(){
    let somme = 0 ;
    for(let i = 0 ; i < article.length ; i++){
        total[i].value = Number(price[i].innerText) * Number(counter[i].innerText);
        somme += Number(price[i].innerText) * Number(counter[i].innerText);
        pricetotal.value = somme 
    }

   

 
}


for (let i= 0 ; i < article.length; i++) 
{
    plus[i].addEventListener ('click', function() {
        counter[i].innerText++;
        calculateSum()
    })
    


    minus[i].addEventListener('click' , function(){
        if(counter[i].innerHTML>0){
            counter[i].innerText-- ;
            calculateSum()
        }
    })

    console.log(2+2)

  //  let buttonremove = remove[i];
   // buttonremove.addEventListener('click' , function(event){
     //   let buttonClick = event.target
      //  buttonClick.parentElement.remove()
     //   price[i].innerHTML=0 ;
   
      //  calculateSum()
   // }) 
   
   

heart[i].addEventListener("click" , changeColor)
}

