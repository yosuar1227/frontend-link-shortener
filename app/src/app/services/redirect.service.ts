import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RedirectService {
  private baseUrl = 'https://tjiqpm43kd.execute-api.us-east-2.amazonaws.com/dev';

  constructor(private http: HttpClient) { }

  redirect(code: string): Observable<HttpResponse<any>> {
    // Pedimos la respuesta completa para poder leer los headers
    return this.http.get(`${this.baseUrl}/${code}`, {
      observe: 'response'
    });
  }
}
