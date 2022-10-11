  max =0;
    for(let i=0; i<arraylength  ; i++){
         count  =0;
        if(array[i]%2==1){
            for(let j=i; j<arrlength ; j++){
                if(array[i]==array[j]){
                    count++
                }
                else{
                    break;
                }
            }
        }
        if(count>max){
            max  = count
        }
    }
    print(max)