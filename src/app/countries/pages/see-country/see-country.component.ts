import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/CountryByNameResponse.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styleUrls: ['./see-country.component.css']
})
export class SeeCountryComponent implements OnInit {

  country!: Country;
  constructor(private httpClient: CountryService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.activatedRoute
      .params
      .pipe(
        switchMap( ({countryId}) => this.httpClient.getCountry(countryId) )
      )
      .subscribe(country => this.country = country)
    /*
    this.activatedRoute
      .params
      .subscribe(params => {
        this.httpClient.getCountry(params["countryId"]).subscribe(country => this.country = country);
      });
    */
  }

}
