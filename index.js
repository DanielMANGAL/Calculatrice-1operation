const number= document.querySelectorAll(".number")
let resultat= document.getElementById("resultat")
let one= document.getElementById("1")
const operator= document.querySelectorAll(".operator")
let erase= document.getElementById("efface")
let equal= document.getElementById("=")
let delet= document.getElementById("delete")
let remainant=false
let point= document.getElementById(".")
let A=0;
let B=0;
let C=0;
let operateur;
let allow=true
let egal=false;
let operatorClicked = false

function calculate(){
    resultat.innerHTML=1
}


    number.forEach(event=>{
       
        allow=true
        event.addEventListener('click',()=>{
           
            if (operatorClicked==true){
                egal=true
                if (remainant==true){
                    resultat.textcontent=" "
                   
                       if (A==" "){
                        
                        A=event.getAttribute("id")
                        resultat.textContent=event.getAttribute("id")
            
                       }
                      else{
                        resultat.textContent+=event.getAttribute("id")
                        A+=event.getAttribute("id")
                      }
                      operatorClicked=true
                    }
                   else if (remainant==false){
                    
                   
                  if (A==" "){
                  
                   
                   A=event.getAttribute("id")
                   resultat.textContent=event.getAttribute("id")
       
                  }
                 else{
                   resultat.textContent+=event.getAttribute("id")
                   A+=event.getAttribute("id")
                 }
               }

            }
            else if (operatorClicked==false){
            if (remainant==true){
             del()
           
                if (A==" "){
                 
                 A=event.getAttribute("id")
                 resultat.textContent=event.getAttribute("id")
     
                }
               else{
                 resultat.textContent+=event.getAttribute("id")
                 A+=event.getAttribute("id")
               }
              
             }
            else if (remainant==false){
             
            
           if (A==" "){
           
            
            A=event.getAttribute("id")
            resultat.textContent=event.getAttribute("id")

           }
          else{
            resultat.textContent+=event.getAttribute("id")
            A+=event.getAttribute("id")
          }
        } } 
        remainant= false
        console.log("numberA  "+A)
    })})

operator.forEach(operator=>
    operator.addEventListener(('click'),event=>{
  
       remainant=false
      egal=true
      if ( operatorClicked ==true){
        
        if (egal==true){
            if(B==" "){
                resultat.innerHTML="="+ A
            }
            else{
    
        B=calc(B,A)
        A=" "
        resultat.innerHTML="="+ B
       allow=true
       operateur= operator.getAttribute("id")
       }
    egal=false}
    remainant=true

      }
      if ( operatorClicked ==false){
        operatorClicked= true
    if (allow==true){
        operateur= operator.getAttribute("id")
        resultat.textContent=" "
   if (A!=" "){
  
    allow=false
  
   
      if(B==" "){
        B=A
        A=" "}
        else{
            B=calc(B,A)
            A=" "
            resultat.textContent=" "
        }
      
    }
    }}

}

)

    
)

equal.addEventListener(('click'),()=>{
    if (egal==true){
        if(B==" "){
            resultat.innerHTML="="+ A
        }
        else{
 
    B=calc(B,A)
    A=" "
    resultat.innerHTML="="+ B
   allow=true


  }
egal=false}
remainant=true
operatorClicked= false
})
delet.addEventListener(('click'),del)


function del(){
    B=" "
    A=" "
    operatorClicked=false
    resultat.innerHTML="0"
    operatorClicked= false
    
 
}

erase.addEventListener(('click'),eras)

function eras(){
    console.log("A eras pre   "+A)
    if (A.length==0){
        
        resultat.innerHTML=0

    }
    else{
        A= A.substring(0,A.length-1)
        resultat.innerHTML=A
    }
    console.log("A eras POST"+ A)
}

function calc(a,b){
    if(operateur=="+"){
        return parseFloat(a)+parseFloat(b)
    }
    else if(operateur=="-"){
        return parseFloat(a)-parseFloat(b)
    }
    else if(operateur=="/"){
        return parseFloat(a)/parseFloat(b)
    }
    else if(operateur=="*"){
        return parseFloat(a)*parseFloat(b)
    }
 
}
