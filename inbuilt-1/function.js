

// js is synchronous threaded language 

function prime (num){

  
  for(let i=1 ; i<=num  ; i++){
    let fac =0;
    for(let j=1; j<=i ; j++){
      if(i%j==0){
        fac++
      }
    }
    if(fac==2){
      console.log(i,"prime number")
    }
  }
  
}
prime(5)
