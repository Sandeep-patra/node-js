var num=5684,rim;
var se=0,so=0;
while(num>0)
{
    rim=num%10;
    if(rim%2==0)
    {
        se=se+rim;
    }
    else
    so=so+rim;
    num=Math.floor(num/10);
}
console.log("sum of the even digits ="+se);
console.log("sum of odd digits="+so);