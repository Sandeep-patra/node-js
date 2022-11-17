class Promotion{
    constructor(protected id:string,protected disc:string,protected createddate:string,protected startdate:string,protected enddate:string){

    }
}
class Productpromotion extends Promotion{
    constructor(id:string,disc:string,createddate:string,startdate:string,enddate:string,protected offertype:string,protected offervalue:number){
        super(id,disc,createddate,startdate,enddate)
    }
}
class Cartpromotion extends Productpromotion{
    constructor(id:string,disc:string,createddate:string,startdate:string,enddate:string,offertype:string,offervalue:number,private value:number){
        super(id,disc,createddate,startdate,enddate,offertype,offervalue)
        console.log(`product id : ${this.id}discount : ${this.disc} created date :${this.createddate} start date :${this.startdate} end date: ${this.enddate} offer type:${this.offertype} offer value in %:${this.offervalue}`)
        console.log(`The value after discount:${this.value-((this.value/100)*this.offervalue)}`);
    }
}
let value=new Cartpromotion("oppo f6","on discount","20/10","23/10","26/10","Discount",8,50000)