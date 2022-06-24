import { HttpClient, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Client, NgxSoapService } from "ngx-soap";
import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import { Article } from "src/app/Models/Article.model";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })
  export class ArticleSoap {
    
    client: Client;
    message:string
    private clientReady = new BehaviorSubject(false);
    constructor(private soap: NgxSoapService, private _httpClient:HttpClient) {
        this.soap.createClient('./assets/articleSoap.xml').then
        (client => {
            this.client = client,
            console.log(this.client);
            this.clientReady.next(true)
        });
    }
    clientState(){
        return this.clientReady.asObservable();
    }
    getAllArticles(){
        return this.client.call('getAllArticles',{}).pipe(
            map(data =>{
                return data.result.articleInfo;
            })
        )
    }

    addArtile(article:Article) {
        return this.client.call('addArticle',article).pipe(
            map(data =>{
                console.log(data)
                return data.result;
            })
        )
    }

    updateArticle(art:Article){
        return this._httpClient.put<any>(`${environment.host_url}articles/update/${art.code}`,art);
    }
    deletArticle(code:number){
        return this._httpClient.delete(`${environment.host_url}articles/delete/${code}`);
    }

  }