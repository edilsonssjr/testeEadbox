import { HomeComponent } from './home/home.component';
import { Http, Response, RequestOptions} from '@angular/http';
import { HttpClient, HttpHeaders, HttpRequest } from 
'@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class HomeService {

  private url = 'https://teste-front.eadbox.com/api/';

  options: RequestOptions;


  constructor(private http: Http) { 
    let headers: any = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://repocursos.unasus.ufma.br');

    this.options = new RequestOptions({ headers: headers });
  }

  courses(): Observable<any> {
    return this.http.get(this.url + 'courses', this.options)
        .map((res: Response) => res.json())
  }

}