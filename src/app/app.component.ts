import { Component } from '@angular/core';
import { CurrencyapiService } from './currencyapi.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assigment-angular-currency-exchange';
  currjson: any = [];

  base = 'USD';
  cont2 = 'USD';
  val1: string = '1';
  retsult:string=''


  changeval(c: string) {
    this.val1 = c;
    console.log(this.val1)
  }




  changebase(a: string) {
    this.base = a;
   console.log(this.base)
  }


  tocountry(b: string) {
    this.cont2 = b;
   console.log(this.cont2)
  }


  constructor(private currency: CurrencyapiService) { }

  clearVal() {

  }
  converter() {
    console.log(this.base);
    console.log(this.cont2);

    this.currency.GetCurrencyData(this.base).subscribe(data => {

      this.currjson = JSON.stringify(data);
      /* console.log(this.currjson)*/

      this.currjson = JSON.parse(this.currjson);

      //switch (this.cont2 == 'USD') {
      //  this.retsult=this.currjson.rates.USD
      //}
    /*  alert(this.cont2)*/
      //var asd=this.cont2;
      //switch (this.cont2) {
      //  case this.cont2:
       
      //    this.retsult = this.currjson.rates.
      //  break;
      
      //default:
      // code block
    /*}*/
    
      if (this.cont2 == 'USD') {
        this.retsult = (Number(this.currjson.rates.USD) * Number(this.val1)).toFixed(2).toString(); 
      }
      if (this.cont2 == 'AED') {
        this.retsult = (Number(this.currjson.rates.AED) * Number(this.val1)).toFixed(2).toString(); 
      }


      if (this.cont2 == 'INR') {

        this.retsult = (Number(this.currjson.rates.INR) * Number(this.val1)).toFixed(2).toString(); 
      }



      if (this.cont2 == 'PKR') {
        this.retsult = (Number(this.currjson.rates.PKR) * Number(this.val1)).toFixed(2).toString(); 
      }

     


      if (this.cont2 == 'EUR') {
        this.retsult = (Number(this.currjson.rates.EUR) * Number(this.val1)).toFixed(2).toString(); 
      }


      if (this.cont2 == 'GBP') {
        this.retsult = (Number(this.currjson.rates.GBP) * Number(this.val1)).toFixed(2).toString(); 
      }


      if (this.cont2 == 'AUD') {
        this.retsult = (Number(this.currjson.rates.AUD) * Number(this.val1)).toFixed(2).toString(); 
      }

      if (this.cont2 == 'SAR') {
        this.retsult = (Number(this.currjson.rates.SAR) * Number(this.val1)).toFixed(2).toString(); 
      }

      if (this.cont2 == 'KWD') {
        this.retsult = (Number(this.currjson.rates.KWD) * Number(this.val1)).toFixed(2).toString(); 
      }

    });

  }

}
