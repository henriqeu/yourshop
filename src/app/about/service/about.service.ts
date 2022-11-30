import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap } from 'rxjs';
import { LocalityInterface, Locality } from 'src/util/locality';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  //public baseUrl = "/api";

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) {}

  // Obtem todos as localitys
  getAllLocalitys(): Observable<LocalityInterface[]> {
    //console.log('Acessou getAllLocalitys');
    return this.httpClient.get<LocalityInterface[]>(
      'api/locality/searchLocality'
    );
  }

  // GET
  getLocalityById(): Observable<LocalityInterface[]> {
     //this.httpClient.get<LocalityInterface>('api/locality/searchLocality/?id=12').subscribe(result => {
     //return this.httpClient.get<Locality[]>('api/locality/searchLocality/?id=12')
     return this.httpClient.get<LocalityInterface[]>('api/locality/searchLocality/?id=12')

  }

  postLocality(locality: LocalityInterface): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(locality);
    console.log('Acessou addLocality', body);
    return this.httpClient.post('api/locality/createLocality', body, {
      headers: headers,
    });
  }


}
