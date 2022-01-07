import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/CountryByNameResponse.interface';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent implements OnInit {

  regions: any[] = [
    {
      code: "EU",
      description: "European Union"
    },
    {
      code: "EFTA",
      description: "European Free Trade Association"
    },
    {
      code: "CARICOM",
      description: "Caribbean Community"
    },
    {
      code: "PA",
      description: "Pacific Alliance"
    },
    {
      code: "AU",
      description: "African Union"
    },
    {
      code: "USAN",
      description: "Union of South American Nations"
    },
    {
      code: "EEU",
      description: "Eurasian Economic Union"
    },
    {
      code: "AL",
      description: "Arab League"
    },
    {
      code: "ASEAN",
      description: "Association of Southeast Asian Nations"
    },
    {
      code: "CAIS",
      description: "Central American Integration System"
    },
    {
      code: "CEFTA",
      description: "Central European Free Trade Agreement"
    },
    {
      code: "NAFTA",
      description: "North American Free Trade Agreement"
    },
    {
      code: "SAARC",
      description: "South Asian Association for Regional Cooperation"
    }
  ];
  selectedRegion: string = "";
  countries: Country[] = [];
  constructor(private httpClient: CountryService) { }

  ngOnInit(): void {
  }

  search(region: string) {
    if (region === this.selectedRegion) return;

    this.selectedRegion = region;
    this.httpClient.getByRegion(this.selectedRegion)
      .subscribe(countries => {
        this.countries = countries;
      });
  }

  getSelectedClass(region: string) {
    return (region === this.selectedRegion) ? 'btn btn-dark' : 'btn btn-outline-dark';
  }

}
