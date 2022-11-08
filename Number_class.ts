class Number_app{

    public n1:number;
    public n2:number;
    public n3:number;

    constructor(num1:number,num2:number,num3:number){
        this.n1=num1;
        this.n2=num2;
        this.n3=num3;
    }
    
    public Sum():any{
        console.log(`the sum of numbers= ${this.n1+this.n2+this.n3}`);
    }
    public avg(){
        console.log(`the average of numbers= ${(this.n1+this.n2+this.n3)/3}`);
    }

 }
 let nm = new Number_app(45,55,56);
 nm.Sum();
 nm.avg();