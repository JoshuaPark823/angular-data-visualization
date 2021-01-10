import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IData } from "../data-type";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  // get data json file
  getData(): Observable<IData[]> {
    return this._http.get<IData[]>("assets/livingcost2020.json");
  }
}
