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
  retsult:string='1'



  changebase(a: string) {
    this.base = a;
  //  console.log(this.base)
  }


  tocountry(b: string) {
    this.cont2 = b;
  //  console.log(this.cont2)
  }


  constructor(private currency: CurrencyapiService) { }

  clearVal() {

  }
  converter() {
    //console.log(this.base);
    //console.log(this.cont2);

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
      if (this.cont2 == 'INR') {
        this.retsult = this.currjson.rates.INR
      }

      if (this.cont2 == 'USD') {
        this.retsult = this.currjson.rates.USD
      }

      if (this.cont2 == 'PKR') {
        this.retsult = this.currjson.rates.PKR
      }

      if (this.cont2 == 'AED') {
        this.retsult = this.currjson.rates.AED
      }


      if (this.cont2 == 'EUR') {
        this.retsult = this.currjson.rates.EUR
      }


      if (this.cont2 == 'GBP') {
        this.retsult = this.currjson.rates.GBP
      }


      if (this.cont2 == 'AUD') {
        this.retsult = this.currjson.rates.AUD
      }

      if (this.cont2 == 'SAR') {
        this.retsult = this.currjson.rates.SAR
      }

      if (this.cont2 == 'KWD') {
        this.retsult = this.currjson.rates.KWD
      }

    });

  }

}
