import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent implements OnInit {

  term: string = "";
  countries: any[] = [];
  hasResults: boolean = true;
  constructor(private hhtpClient: CountryService) { }

  ngOnInit(): void {
  }

  search() {
    this.hhtpClient.getByCountry(this.term)
      .subscribe(data => {
        if (data?.status == 404) 
          this.hasResults = false;
        else {
          this.countries = data;
          this.hasResults = true;
        } 
      });
  }

}
