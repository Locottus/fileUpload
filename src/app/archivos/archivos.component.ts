import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-archivos',
  templateUrl: './archivos.component.html',
  styleUrls: ['./archivos.component.css']
})
export class ArchivosComponent implements OnInit {

  url = 'https://incyt.url.edu.gt/incyt/api/HashFiles/postStaticFile?origen=incyt_uploads';//PROD
  //url = 'http://localhost:3002/incyt/api/HashFiles/postStaticFile?origen=incyt_uploads';//DEV
  retorno = "";
  
  constructor(
    private http: HttpClient,
    private _flashMessagesService: FlashMessagesService) { }

  ngOnInit(): void {
    //this._flashMessagesService.show('We are in about component!', { cssClass: 'alert-success', timeout: 5000 });
  }

  

  postMethod(files: FileList) {
    this._flashMessagesService.show('Cargando Archivo, por favor espere', { cssClass: 'alert-success', timeout: 5000 });
    var fileToUpload = files.item(0); 
    console.log(fileToUpload);
    let formData = new FormData(); 
    formData.append("file", fileToUpload, fileToUpload.name); 
    this.http.post(this.url, formData).subscribe((val) => {
    var u = JSON.parse( JSON.stringify(val));
    this.retorno  = u.url;  
    console.log(val, this.retorno);
    if (this.retorno.length > 0)
      this._flashMessagesService.show('Archivo subido exitosamente al servidor!', { cssClass: 'alert-success', timeout: 5000 });
    else
      this._flashMessagesService.show('Hubo un error al subir el archivo, por favor intente de nuevo.', { cssClass: 'alert-danger', timeout: 5000 });
    });
    return false; 
    }

 

}
