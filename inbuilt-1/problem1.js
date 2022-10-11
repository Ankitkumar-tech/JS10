

// var arr = ['Fire', 'Air', 'Water'];


// function include(target){
//   for(let i=0; i<arr.length ; i++){
//     if(arr[i]===target){
//       return true 
//     }
//   }
  
// }

// console.log(include("Air")) 


var arr  = ['Fire', 'Air', 'Water'];



function join (changes){
  let bag  ="" ;
  let icon  = changes
  if(changes==null){
    icon = ","
  }
  else if(changes==""){
    icon  =""
  }
  for(let i=0; i<arr.length  ; i++){
    if(i==arr.length -1){
      bag  = bag + arr[i]
    }else {
      bag  = bag +arr[i]+icon
    }
  }
  console.log(bag)
}
join ()