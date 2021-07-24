function longestConsec(strarr, k) {
    let result = []
    let sum = ''
    let arr = []
    if(strarr.length === 0){
        return ''
    }
    for(let x = 0; x < strarr.length; x++){
        if(k == 1){
            sum = strarr[x];
            result.push(sum)
        }
        if(k == 2){
           sum = strarr[x] + strarr[x + 1]
           if(sum.includes('undefined')){

           }else{
            result.push(sum);
           }
        }
        if(k == 3){
            sum = strarr[x] + strarr[x + 1] + strarr[x + 2]
            if(sum.includes('undefined')){

            }else{
             result.push(sum);
            }
        }
        if(k > 3){
            sum = strarr[x] + strarr[x + 1] + strarr[x + 2] + strarr[x + 3]
            if(sum.includes('undefined')){

            }else{
             result.push(sum);
            }
        }
        if(k > strarr.length || k <= 0){
            return ''
        }
    }
   for(let x of result){
       arr.push(x.length);
   }
  let finalNum = Math.max(...arr);
  let resultNum = 0
  result.forEach(n =>{
      if(n.length === finalNum){
          resultNum = n;
      }
  } )
  return resultNum;

}

console.log(longestConsec([], 2))