import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LojaService {

  public baseUrl = "http://localhost:8080/api/tutorials";

  constructor(private httpClient: HttpClient) { }

  public getHorarios(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "horarios");
  }
}
