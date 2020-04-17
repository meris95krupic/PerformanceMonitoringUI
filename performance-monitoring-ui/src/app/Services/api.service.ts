import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  performanceData: any = [];

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:5555/v1/performance').subscribe(data => {
      this.performanceData = data;
    });
    console.log('Hi ich bin die API...');
  }

}
