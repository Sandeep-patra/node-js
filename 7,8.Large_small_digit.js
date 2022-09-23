var num=34238389,r,large=0,small=9;
while(num>0)
{
r=num%10;
num=Math.trunc(num/10);
if(r>large)
{
large=r;
}
if(r<small){
    small=r;
}
}
console.log("largest digit="+large+
"  smallest digit="+small);
