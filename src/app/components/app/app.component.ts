import { Component, OnInit } from '@angular/core';

import { StocksService } from '../../services/stocks.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private stockService: StocksService) { }

  ngOnInit() {
    this.stockService.getOneDay('goog')
  }

}
