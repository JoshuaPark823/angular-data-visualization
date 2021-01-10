import { Component } from '@angular/core';
import { DataService } from './services/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public data = [];

  constructor(
    private _dataService: DataService,
  ){}

  ngOnInit() {
    // testing the service get method
    this._dataService.getData().subscribe(data => console.log(data));
  }
}
