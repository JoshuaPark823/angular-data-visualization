import { Component } from '@angular/core';
import { DataService } from './services/data-service.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private _dataService: DataService,
    private _http: HttpClient
  ){}

  ngOnInit() {
    this._http.get("assets/livingcost2020.json").subscribe(data => {
      console.log(data);
    })
  }
}
