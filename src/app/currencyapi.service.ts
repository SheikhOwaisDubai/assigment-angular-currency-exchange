import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyapiService {

  constructor(private http: HttpClient) {

  }
  GetCurrencyData(countvar: string) {
    let url = 'https://api.exchangerate.host/latest?base=' + countvar;
    return this.http.get(url)
  }
}
