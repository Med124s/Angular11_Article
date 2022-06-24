import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Article } from 'src/app/Models/Article.model';
import { ArticleSoap } from 'src/app/services/soap/article.soap.service';

@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.css']
})
export class AddModelComponent implements OnInit {
  registrationFees = 100
  transportFees = 50;
  public formGroup: FormGroup;
  disable:boolean = true;
  articleAdded:Article;
  serviceStatus:string;
  SelectedImage:string;


  constructor(
            private formBuilder: FormBuilder,
            private _registerService:ArticleSoap,
            public dialogRef: MatDialogRef<any>
           ) { }


  ngOnInit(): void {
    this.formControls();
    this.dialogRef.updateSize('45%');
  }

  formControls(){
    this.formGroup = this.formBuilder.group({
      'title': [null,[Validators.required]],
      'description': [null,[Validators.required]],
      'price':  [null,[Validators.required]],
      'quantity':  [null,[Validators.required]],
      'imageUrl': [''],
    });
  }

  isValidForms():boolean{
    if(this.formGroup.valid){
      console.log("is valid")
      return true
    }
    return false;
  }

  confirm:string;
  onSubmit(){

    if(this.isValidForms){
    this.formGroup.get('imageUrl').setValue(this.SelectedImage);
    console.log(this.formGroup.get('imageUrl').value)
    this._registerService.addArtile(this.formGroup.value).subscribe(data=>{      
      this.articleAdded = data.articleInfo;
      this.serviceStatus = data.serviceStatus;
      console.log(this.serviceStatus)
    })

  }
}

onAddImage(event:any){
  this.SelectedImage = event.target.files[0].name;
  console.log(this.SelectedImage)
}

}

