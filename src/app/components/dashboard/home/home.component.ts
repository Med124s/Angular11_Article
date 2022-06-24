import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Models/Article.model';
import { ArticleService } from 'src/app/services/article/article.service';
import { ArticleSoap } from 'src/app/services/soap/article.soap.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles:Article[] =[]
  // categories: Category[];
  // products: Product[];
  readonly hostArt = "http://localhost:8005/api/articles"
  currentPage: number = 0;
  totalItems: number = 0;
  totalPages: any[] = [];
  keyWord: string = "";
  sizeShower: number = 6;
  idCurrentCategory = null;
  isLoggedIn = true;
  
  constructor(private _articleService:ArticleService,private _soap:ArticleSoap){}

  ngOnInit(): void {
    this._soap.clientState().subscribe(ready=>{
      if(ready){
        this.loadAllArticles();
      }
    })

    // this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.getAllArticles();
    this.idCurrentCategory = null;
  }
  loadAllArticles(){
    console.log("load now");
    this._soap.getAllArticles().subscribe(articles=>{
      console.log('articles :',articles);
      
    })
  }
  getAllArticles(){
    this._articleService.searchArticle(this.keyWord,this.currentPage,this.sizeShower)
      .subscribe( data => {
        this.articles = data['articles'];
        this.totalItems = data['totalItem']
        // this.totalPages = data['totalPages']
        this.currentPage = data['currentPage']
        console.log("items"+this.totalItems);
        console.log("pages"+this.totalPages);

        for (let i = 0; i < data['totalPages']; i++) {
          this.totalPages[i] = i;
        }
      }, error => {
        console.error(error.message);
      })
  }
  searchProduct() {
    this.totalPages = [];
    this.getAllArticles();
  }

  onRefreshProducts() {
    this.idCurrentCategory = null;
    this.keyWord = "";
    this.currentPage = 0;
    this.getAllArticles();
  }

  switchPage(p: number) {
    this.currentPage = p;
    this.getAllArticles();
  }

  detailArticle(){
    
  }

}
