import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { ArticleSoap } from 'src/app/services/soap/article.soap.service';
import { Article } from 'src/app/Models/Article.model';
import { AddModelComponent } from '../dialogsModel/add-model/add-model.component';
import { DialogModelComponent } from '../dialogsModel/dialog-model/dialog-model.component';
import { AuthService } from 'src/app/services/auth.service';
// import { AddStudentComponent } from '../dialogsModel/add-student/add-student.component';
// import { DialogModelComponent } from '../dialogsModel/dialog-model/dialog-model.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  reorderable: boolean = true;
  loadingIndicator: boolean = false;
  SelectedImage:string;

  title = "Details Article"
  ColumnMode = ColumnMode;
  selected = [];
  SelectionType = SelectionType;
    columns = [{name:'code'},{name:'Title'}, {name:'description'},{name:'price'},
              {name:'quantity'}];
  rows:Article[]=[];
  temp:Article[]=[];

    pageSize:number =5;
    pageNumber:number;
    totalElement:number;
    currentPage:number;
    totalPages:number;

    constructor(private _reg:ArticleSoap,public dialog: MatDialog,private authService: AuthService) {
    }
    ngOnInit() {
      this._reg.clientState().subscribe(ready=>{
        if(ready){
          this.getArticles({offset:0});
        }
      })
    }
      getArticles(pageInfo){
        this.pageNumber = pageInfo.offset;
        this._reg.getAllArticles().subscribe(data=>{
          console.log(data)
          this.rows = data;
          this.temp = this.rows;
        });
      }
      onRefrech(){
        this.getArticles({offset:0});
      }

  onSelect({ selected }) {
    // selected.stopPropagation
    this.openDialog(selected);
  }

  openDialog(selected) {
    const dialogRef = this.dialog.open(DialogModelComponent,{data:selected});
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        window.location.reload();
      }
    }); 
   }
   disable = true;
   test(event){
     console.log("disabling")
     event.stopPropagation();
   }
   
   addArticle(){
    const dialogRef = this.dialog.open(AddModelComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        window.location.reload();
      }
    })
   }
  filterArticles(event){
    console.log(event)
    console.log(this.temp)
    const val = event.target.value.toLowerCase();
      const temp = this.temp.filter(elem=>{
        return elem.title.toLowerCase().indexOf(val)!=-1 ||!val||
               elem.description.toLowerCase().indexOf(val)!=-1||
               elem.code == val;
      });
     this.rows = temp;
  }

   refrech(){
     this.getArticles({offset:0});

   }
   checkSelectable(event){
    return event ;
 }
 onAddImage(event:any){
   this.SelectedImage = event.target.files[0].name;
 }

}


