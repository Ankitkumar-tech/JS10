// output ==> 6 2 4 8 


for(let i=1; i<=2; i++){
  let bag =""
  for(let j=1; j<=2; j++){
    bag =bag +i+j+" "
  }
  for(let j=2; j>=1; j--){
    bag =bag +i+j+" "
  }
  console.log(bag)
}
