/**
 * created by MarlaN. 09.07.2017
 */
import { Injectable }    from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import {Observable} from 'rxjs/Observable';
import "rxjs/Rx";

@Injectable()
export class CountriesService {
  private headers: Headers;
  private url = 'https://restcountries.eu/rest/v2/name/';
  options: RequestOptions;
  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    let noResults: Array<any> = [];
    return Promise.resolve(noResults);
  }

  search(terms: Observable<string> ) {
    return terms.debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => this.rawSearch(term));
  }
  rawSearch(terms: string) {
    return this.http.get(this.url + terms).toPromise()
      .then(this.extractDataGet)
      .catch(this.handleError);
  }

  private extractDataGet(res: Response) {
    let body = res.json();
    return body;
  }
}
