import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-main',
  templateUrl: './data-main.component.html',
  styleUrls: ['./data-main.component.css']
})
export class DataMainComponent implements OnInit {

  public count: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
}