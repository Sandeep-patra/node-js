var num= 56458, rim ,sum=0 ,avg,c=0;
while(num>0)
{ 
    c++;
    rim=num%10;
    sum=sum+rim;
    num=Math.trunc(num/10);
}
avg=sum/c;
console.log("the avarge of the given no="+avg);