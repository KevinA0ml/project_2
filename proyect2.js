const contador = document.getElementById("contar");
const sumar = document.getElementById("incr");
const restar = document.getElementById("decr");
const reset = document.getElementById("reset");


let numero = 0;
 cont = contador

sumar.addEventListener("click",()=>{
    numero++;
    contador.innerHTML = numero;
    if (parseInt(document.getElementById("contar").innerHTML)==0){
  
        contador.style.cssText ='color: white';
    
        
        
    }
    if (parseInt(document.getElementById("contar").innerHTML)>0){
  
        contador.style.cssText ='color: blue';
    
        
        
    }else{
        contador.style.cssText ='color: red';
    }


});

restar.addEventListener("click",()=>{
   

    numero--;
    contador.innerHTML = numero;
    if (parseInt(document.getElementById("contar").innerHTML)==0){
  
        contador.style.cssText ='color: white';
    
        
        
    }
    if (parseInt(document.getElementById("contar").innerHTML)<0){
  
        contador.style.cssText ='color: red';
    
        
        
    }else{
        contador.style.cssText ='color: blue';
    }
    
});

reset.addEventListener("click",()=>{
    numero = 0;
    contador.innerHTML = numero;
    contador.style.cssText ='color: white';
});


