import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private BASEURL: string = "https://restcountries.com/v2";

  constructor(private httpClient: HttpClient) { }

  getByCountry(name: string): Observable<any> {
    const url = `${this.BASEURL}/name/${name}`;
    return this.httpClient.get(url);
  }
}
