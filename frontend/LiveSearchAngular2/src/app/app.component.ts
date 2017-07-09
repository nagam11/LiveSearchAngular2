import { Component } from '@angular/core';
import { Subject } from 'rxjs/subject';
import {Country} from './Country';
import {CountriesService} from './countriesService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CountriesService],
})
export class AppComponent {
  countries: Array<Country>;
  term = new Subject<string>();
  selectedCountries: Array<Country> = [];

  constructor(
    private countriesService: CountriesService,
  ){
    // --instant search
    this.countriesService.search(this.term).subscribe(results => this.countries = results);
  }

  // --save selected countries
  sCountries(item: Country) {
    this.selectedCountries.push(item);
  }

}
