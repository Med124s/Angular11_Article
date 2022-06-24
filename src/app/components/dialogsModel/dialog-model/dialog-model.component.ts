import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Article } from 'src/app/Models/Article.model';
import { ArticleSoap } from 'src/app/services/soap/article.soap.service';


@Component({
  selector: 'app-dialog-model',
  templateUrl: './dialog-model.component.html',
  styleUrls: ['./dialog-model.component.css'],
})
export class DialogModelComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:Article[],
            private formBuilder: FormBuilder,
            private _registerService:ArticleSoap) { }
  registrationFees = 100
  transportFees = 50;
  allComplete: boolean = false;
  formGroup: FormGroup;
  disable:boolean = true;
  registerActive:boolean = false;
  StudentConfirmed:boolean = false;

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      code: [this.data[0].code],
      title: [this.data[0].title],
      price: [this.data[0].price],
      quantity: [this.data[0].quantity],
      imageUrl: [],
      description: [this.data[0].description],
    });
  }
  onDelete(){
    this._registerService.deletArticle(this.data[0].code).subscribe(res=>{
      console.log(res)
    },err=>{console.log(err)})
  }
  readOnly:boolean = false;
  update(){
    this._registerService.updateArticle(this.formGroup.value)
    .subscribe(data=>{
      console.log(data);
    },err=>console.log(err))
  }
  onSaveUpdate(){

  }
  SelectedImage:any;
  onAddImage(event:any){
    this.SelectedImage = event.target.files[0].name;
    console.log(event.target.files[0].name);
  }
}
