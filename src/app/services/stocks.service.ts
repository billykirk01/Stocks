import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class StocksService {

  constructor(private http: HttpClient) { }

  getOneDay(symbol: String) {
    this.http.get('https://api.iextrading.com/1.0/stock/' + symbol + '/chart/1d').subscribe(
      data => {
        console.log(data)
      },
      error => {
        console.log("Error: " + error.error)
      }
    );
  }

  getOneMonth(symbol: String) {
    this.http.get('https://api.iextrading.com/1.0/stock/' + symbol + '/chart/1m').subscribe(
      data => {
        console.log(data)
      },
      error => {
        console.log("Error: " + error.error)
      }
    );
  }

  getThreeMonth(symbol: String) {
    this.http.get('https://api.iextrading.com/1.0/stock/' + symbol + '/chart/3m').subscribe(
      data => {
        console.log(data)
      },
      error => {
        console.log("Error: " + error.error)
      }
    );
  }

  getSixMonth(symbol: String) {
    this.http.get('https://api.iextrading.com/1.0/stock/' + symbol + '/chart/6m').subscribe(
      data => {
        console.log(data)
      },
      error => {
        console.log("Error: " + error.error)
      }
    );
  }

  getYearToDate(symbol: String) {
    this.http.get('https://api.iextrading.com/1.0/stock/' + symbol + '/chart/ytd').subscribe(
      data => {
        console.log(data)
      },
      error => {
        console.log("Error: " + error.error)
      }
    );
  }

  getOneYear(symbol: String) {
    this.http.get('https://api.iextrading.com/1.0/stock/' + symbol + '/chart/1y').subscribe(
      data => {
        console.log(data)
      },
      error => {
        console.log("Error: " + error.error)
      }
    );
  }

  getTwoYear(symbol: String) {
    this.http.get('https://api.iextrading.com/1.0/stock/' + symbol + '/chart/2y').subscribe(
      data => {
        console.log(data)
      },
      error => {
        console.log("Error: " + error.error)
      }
    );
  }

  getFiveYear(symbol: String) {
    this.http.get('https://api.iextrading.com/1.0/stock/' + symbol + '/chart/5y').subscribe(
      data => {
        console.log(data)
      },
      error => {
        console.log("Error: " + error.error)
      }
    );
  }

}
