import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { LocalityInterface } from 'src/util/locality';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  //  private getAllLocalitysURL = environment.baseApiUrl + "locality/searchLocality/";
  // private getLocalityByIdURL = environment.baseApiUrl + "locality/searchLocality/{id}";
  // private postLocalitysURL = environment.baseApiUrl + "locality/createLocality/";
  // private updateLocalitysURL = environment.baseApiUrl + "locality/updateLocality/?id={id}";

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
  getLocalityById(id:string): Observable<LocalityInterface> {
     let queryString = 'api/locality/searchLocality/?id='+ id;
     console.log(queryString)
     return this.httpClient.get<any>(queryString).pipe(
      map(interfaceById => {
        interfaceById = interfaceById[0];
        let newInterface:LocalityInterface = {
          id: interfaceById.id,
          enduser : interfaceById.enduser,
          room : interfaceById.site,
          floor : interfaceById.floor,
          site : interfaceById.site
        }
        return newInterface;
      })
     );
  }

  postLocality(customInterface: LocalityInterface): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(customInterface);
    console.log('Acessou addLocality', body);
    return this.httpClient.post('api/locality/createLocality', body, {
      headers: headers,
    });
  }


}
