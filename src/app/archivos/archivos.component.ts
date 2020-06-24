import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-archivos',
  templateUrl: './archivos.component.html',
  styleUrls: ['./archivos.component.css']
})
export class ArchivosComponent implements OnInit {

  url = 'https://incyt.url.edu.gt/incyt/api/HashFiles/postStaticFile?origen=incyt_uploads';//PROD
  //url = 'http://localhost:3002/incyt/api/HashFiles/postStaticFile?origen=incyt_uploads';//DEV
  retorno = "";
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  

  postMethod(files: FileList) {
    var fileToUpload = files.item(0); 
    console.log(fileToUpload);
    let formData = new FormData(); 
    formData.append("file", fileToUpload, fileToUpload.name); 
    this.http.post(this.url, formData).subscribe((val) => {
    var u = JSON.parse( JSON.stringify(val));
    this.retorno  = u.url;  
    console.log(val);
    });
    return false; 
    }

 

}
