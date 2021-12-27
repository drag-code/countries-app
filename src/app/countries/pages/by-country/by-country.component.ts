import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/CountryByNameResponse.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent implements OnInit {

  term: string = "";
  countries: Country[] = [];
  suggestions: string[] = [];
  hasResults: boolean = true;
  constructor(private httpClient: CountryService) { }

  ngOnInit(): void {
  }

  search(term: string) {
    this.term = term;
    this.httpClient.getByCountry(term)
      .subscribe(countries => {
        if (countries.length > 0) {
          this.countries = countries;
          this.hasResults = true;
        } else this.hasResults = false;
      });
  }

  showSuggestions(term: string) {
    this.term = term;
    this.httpClient.getByCountry(term)
      .subscribe(countries => {
        if (countries.length > 0) {
          this.suggestions = countries.map(country => country.name);
          this.hasResults = true;
        } else this.hasResults = false;
      });
  }
}
