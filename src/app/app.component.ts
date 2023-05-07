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


}
