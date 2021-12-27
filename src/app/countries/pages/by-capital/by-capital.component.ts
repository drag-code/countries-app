import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/CountryByNameResponse.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css']
})
export class ByCapitalComponent implements OnInit {

  term: string = "";
  countries: Country[] = [];
  suggestions: string[] = [];
  hasResults: boolean = true;
  constructor(private httpClient: CountryService) { }

  ngOnInit(): void {
  }

  search(term: string) {
    this.term = term;
    this.httpClient.getByCapital(term)
      .subscribe(countries => {
        if (countries.length > 0) {
          this.countries = countries;
          this.hasResults = true;
        } else this.hasResults = false;
      });
  }

  showSuggestions(term: string) {
  
  }
}
