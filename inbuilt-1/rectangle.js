let rectangle ={
length :30,
width  :20 ,


  area :function (){
    c   = this.length*  this.width
    return c
  },

  perimeter:function (){
  c  = 2*(this.length+this.width);
  return c
  }
  
  
}

console.log(rectangle["area"]());
console.log(rectangle["perimeter"]());