// // Create a rectangle object with length and width properties
// // // Create two methods area and perimeter, that will return the area and perimeter of the rectangle

// // let rectangle = {
// //   width:20,
// //   length:30,

// //   area : function(){


// //     return (this.width*this.length);
 
// //   },
// //   perimeter : function(){
// //     return (2*(this.length+this.width))
// //   }
  
// // }

// // let x = rectangle["perimeter"]()


// // // ************************************************************


// // let arr1 = ["Rice", "Dal", "Salt"]
// // let arr2 = [2, 3, 1]
// // let arr3 = [60, 50, 20]

// // let data = [];
// // for(let i=0;i<arr1.length;i++){
// //   let obj = {};
// //   obj["product"] = arr1[i]
// //   obj["quantity"] = arr2[i]
// //   obj["price"] = arr3[i]
// //   // console.log(obj)
// //   data.push(obj);
// // }
// // console.log(data)

// // let obj = {
// //   data : data,

// //   total : function(){
// //     let total = 0;

// //     console.log(this.data[0]["product"])
// //     for(let i=0;i<this.data.length;i++){
// //      total +=this.data[i]["quantity"]*this.data[i]["price"]
      
// //     }
// //     return total;
// //   }z
  
// // }

// // console.log(obj["total"]());



// // // ************************************************************
//   var sales = [
//   { item: 'PS4 Pro', stock: 3, original: 399.99 },
//   { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
//   { item: 'Nintendo Switch', stock: 4, original: 299.99 },
//   { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
//   { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
// ];



// let obj = {
//     sales : sales,

//   calculateSalesTotals : function (){
//     let ans = [];

//     for(let i=0;i<this.sales.length;i++){
      
//       let objinp ={};
      
//       if(this.sales[i]["discount"]===undefined){
//         objinp["item"] = this.sales[i]["item"];
//         objinp["original"] = this.sales[i]["original"];
//         objinp["sales"] = this.sales[i]["original"];
//         objinp["stock"] = this.sales[i]["stock"];
//         objinp["total"] = this.sales[i]["original"]*this.sales[i]["stock"];;

        
//         ans.push(objinp)
//       }

//       else{
//         objinp["discount"] =this.sales[i]["discount"]
//         objinp["item"] = this.sales[i]["item"];
//         objinp["original"] = this.sales[i]["original"];
//         objinp["sales"] = this.sales[i]["original"]-(this.sales[i]["original"]*this.sales[i]["discount"])
//         objinp["stock"] = this.sales[i]["stock"];
//         objinp["total"] = objinp["sales"]*this.sales[i]["stock"];;
        
//         ans.push(objinp)
//       }
     
//     }
//     console.log(ans)
//     } 
// }
// obj["calculateSalesTotals"]()



let arr =[1,2,3];


for(let i=0; i<arr.length  ; i++){
  let bag =[];
  for(let j=i; j<arr.length ; j++){
    bag.push(arr[j]);
    console.log(bag)
  }
}





