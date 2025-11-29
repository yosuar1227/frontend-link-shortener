import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  private baseUrl = 'https://k3uqv0e6lb.execute-api.us-east-2.amazonaws.com/dev/stats';

  constructor(private http: HttpClient) { }

  getStats(code: string, date?: string): Observable<any> {
    let url = `${this.baseUrl}/${code}`;

    if (date) {
      url += `?date=${date}`;
    }

    return this.http.get(url);
  }
}
