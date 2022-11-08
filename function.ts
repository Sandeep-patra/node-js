let ary:number[]=[4,8,9,33,2,7];
function sum(i:number,j:number):number{
    return ary[i]+ary[j];
}
let k:number=ary.length-1;
let s:number=sum(0,k);
console.log("sum of 1st & last no="+s);
