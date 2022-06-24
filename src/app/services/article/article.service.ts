import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from 'src/app/Models/Article.model';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
    constructor(private _httpClient:HttpClient){}

    searchArticle(keyword:string,page:number,size:number):Observable<Article[]>{
        return this._httpClient.get<[]>(`${environment.host_url}searchArticle/search?title=${keyword}&desc=${keyword}&page=${page}&size=${size}`);
    }

}