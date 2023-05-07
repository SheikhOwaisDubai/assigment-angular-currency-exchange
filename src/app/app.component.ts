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
    //console.log(this.base);
    //console.log(this.cont2);

    this.currency.GetCurrencyData(this.base).subscribe(data => {

      this.currjson = JSON.stringify(data);
      console.log(this.currjson)
      this.currjson
    });

  }

}
