class Add{
    constructor(public number1:number,public number2:number,public number3:number){

    }
}
class Avg{
    constructor(public sum:Add){

    }
}
class SI{
    constructor(public principal:number,public time:number,public rate:number,public avg:Avg){
    }
    public show(){
        console.log(`the simple intrest is ${(this.principal*this.time*this.rate)/100}`);
        console.log(`the sum of three number is ${(this.avg.sum.number1+this.avg.sum.number2+this.avg.sum.number3)}`);
        console.log(`the average of three number is ${(this.avg.sum.number1+this.avg.sum.number2+this.avg.sum.number3)/3}`)
    }
}
let nb = new Add(44,64,22);
let avg = new Avg(nb);
let si = new SI(10000,5,3,avg);
si.show();