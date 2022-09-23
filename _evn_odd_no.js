var num=5684561,rim;
var se=0,so=0;
while(num>0)
{
    rim=num%10;
    if(rim%2==0)
    {
        se=(se*10)+rim;
    }
    else
    so=(so*10)+rim;
    num=Math.trunc(num/10);
}
console.log("The even no  ="+se);
console.log("The odd no="+so);