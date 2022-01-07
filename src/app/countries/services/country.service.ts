import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/CountryByNameResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private BASEURL: string = "https://restcountries.com/v2";


  get httpParams(): HttpParams {
    return new HttpParams().set("fields", "name,capital,flag,population,alpha2Code");
  }

  constructor(private httpClient: HttpClient) { }

  getByCountry(name: string): Observable<Country[]> {
    const url = `${this.BASEURL}/name/${name}`;
    return this.httpClient.get<Country[]>(url, { params: this.httpParams });
  }

  getByCapital(capital: string): Observable<Country[]> {
    const url = `${this.BASEURL}/capital/${capital}`;
    return this.httpClient.get<Country[]>(url, { params: this.httpParams });
  }

  getCountry(code: string): Observable<Country> {
    const url = `${this.BASEURL}/alpha/${code}`;
    return this.httpClient.get<Country>(url);
  }

  getByRegion(regionalbloc: string): Observable<Country[]> {
    const url = `${this.BASEURL}/regionalbloc/${regionalbloc}`;
    return this.httpClient.get<Country[]>(url, { params: this.httpParams });
  }
}
