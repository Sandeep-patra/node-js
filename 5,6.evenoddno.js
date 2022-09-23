var num=554621,c=1,r;
var k=num,even=0,odd=0;
while(num>0)
{
    c=c*10;
    num=Math.trunc(num/10);
}
while(k>0)
{
    r=Math.trunc(k/c);
    k=k%c;
    c=c/10;
    if(r%2==0)
    {
        even=(even*10)+r;
    }
    else{
        odd=(odd*10)+r;
    }
}
console.log("the odd num="+odd);
console.log("the even no="+even);