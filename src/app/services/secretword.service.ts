import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SecretwordService {

  constructor(private http: HttpClient) { }


getSecret(){
  //let url =  '/assets/clima-general.json';
  let url = 'https://arcgis-web.url.edu.gt/incyt/api/HashFiles/getSecret';
  //console.log(url);
  return this.http.get(url);

}

}
