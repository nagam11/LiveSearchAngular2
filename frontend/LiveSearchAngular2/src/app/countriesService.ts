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
  private url = 'TODO';
  options: RequestOptions;
  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  search(terms: Observable<string>, debounceMs = 400 ) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.rawsearch(term));
  }
  rawsearch(terms: string) {
    return this.http.get(this.url + terms).toPromise()
      .then(this.extractDataGet)
      .catch(this.handleError);
  }

  private extractDataGet(res: Response) {
    let body = res.json();
    return body;
  }
}
