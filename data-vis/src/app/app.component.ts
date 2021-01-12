import { Component } from '@angular/core';
import { IData } from './data-type';
import { DataService } from './services/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public data_set: IData[] = [];

  constructor(private _dataService: DataService){}

  async ngOnInit() {

  }
}
