import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({"Content-Type": "application/json"})
}


@Injectable({
  providedIn: 'root'
})
export class SecretwordService {

  constructor(private http: HttpClient) { }


getSecret():Observable<any>{
  //let url =  '/assets/clima-general.json';
  let url = 'https://arcgis-web.url.edu.gt/incyt/api/HashFiles/getSecret';
  //console.log(url);
  return this.http.get(url);

}


savePost(msg : any):Observable<any>{
  let url = "some/url";
  return this.http.post<any>(url,msg,httpOptions);

}


}
