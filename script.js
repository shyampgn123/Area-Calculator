let sel = document.querySelector(".areaof");    
    let ipts = document.querySelectorAll("input"); 
    let ps = document.querySelectorAll(".ipt1");
    let cal = document.querySelector(".cal");
    let ans = document.querySelector(".ans");    
 let vlu = 0; document.querySelector(".selbtn").addEventListener("click", () =>{
     if(sel.value == 1 || sel.value == 3){
         ipts[0].style.display="grid"
         ipts[1].style.display="none"
         cal.style.display="grid"
         ps[1].innerText=""
         cal.style.marginTop="-10px"
     }
     else if(sel.value == 0){
         ipts[0].style.display="none"
         ipts[1].style.display="none"
         cal.style.display="none"
         ans.style.display="none"
         ps[0].innerText=""
         ps[1].innerText=""
     }
     else{
         ipts[0].style.display="grid"
         ipts[1].style.display="grid"
         cal.style.display="grid"
         cal.style.marginTop="20px"
     }
     switch (sel.value){
       case '0':
           alert("Select the digram first")
       break;
       case '1':
           vlu = 1;
           ps[0].innerText="Enter the radius:"
       break;
       case '2':
           vlu = 2;
           ps[0].innerText="Enter the base:"
           ps[1].innerText="Enter the height:"
       break;
       case '3':
           vlu = 3;
           ps[0].innerText="Enter the side:"
       break;
       case '4':       
           vlu = 4;
           ps[0].innerText="Enter the width:"
           ps[1].innerText="Enter the Height:";
           break;                 
     }  
         ipts[0].value ="";
     ipts[1].value ="";
     ans.innerText=""
   })
  cal.addEventListener("click", () => {
     calculations();
     sel.value = 0;
 })        
 let result = 0;
 let dgm = '';
 function calculations() {
    switch (vlu){
        case 1:
        dgm = "Circle";
        result = 3.14 * ipts[0].value **2;
        break;
        case 2:
        dgm = "Triangle";
        result = 1/2 * ipts[0].value * ipts[1].value;       
        break;
        case 3:
        dgm = "Square";
        result = ipts[0].value * ipts[0].value;       
        break;
        case 4:
        dgm = "Rectangle";
        result = ipts[0].value * ipts[1].value;       
        break;
    }
    ans.style.display="flex"
    ans.innerText= `The area of ${dgm} is ${result.toFixed(2)} m²` 
    
           
        }
