

let arr = [3,4,5,6,7]
// Output ==> 3 - 5 - 7

let bag  =""
let array  = arr.forEach(function(item,index){
  if(index%2==1){
   bag  = bag +" "+"-"+" "
  }

  else{
    bag  = bag  + item  
  }
  
})

console.log(bag)