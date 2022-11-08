class Simple_interest
{
    public p:any;
    public t:any;
    public r:any;

    constructor(principal:any,time:any,rate:any){
        this.p=principal;
        this.t=time;
        this.r=rate;
    }
    public si(){
        console.log(`the simple intrest is ${this.p*this.t*this.r/100}`);
    }
}
let smp = new Simple_interest(1000,5,3);
smp.si();