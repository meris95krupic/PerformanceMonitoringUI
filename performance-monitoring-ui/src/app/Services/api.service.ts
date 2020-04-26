import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  performanceData: any = [];

  apiUrl: string = 'http://localhost:5555/v1/performance';
  // headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {
    
    console.log('Hi ich bin die API...');
    
  }

  getPerformanceData() {
    return this.http.get(`${this.apiUrl}`);
  }

}
