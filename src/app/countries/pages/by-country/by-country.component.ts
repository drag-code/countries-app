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
  suggestions: Country[] = [];
  hasResults: boolean = true;
  suggestionsHided: boolean = false;
  constructor(private httpClient: CountryService) { }

  ngOnInit(): void {
  }

  search(term: string) {
    this.term = term;
    this.suggestionsHided = true;
    this.httpClient.getByCountry(term)
      .subscribe(countries => {
        if (countries.length > 0) {
          this.countries = countries;
          this.hasResults = true;
        } else this.hasResults = false;
      });
  }

  showSuggestions(term: string) {
    this.suggestionsHided = false;
    this.term = term;
    this.suggestions = [];
    if (term) {
      this.httpClient.getByCountry(term)
        .subscribe(countries => this.suggestions = countries.splice(0, 6));
    }
  }
}
