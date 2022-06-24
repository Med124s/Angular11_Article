// import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
// import { Registration } from 'src/app/Models/registration.model';
// import { RegisterService } from 'src/app/services/register.service';
// import { AddStudentComponent } from '../../dialogsModel/add-student/add-student.component';
// import { DialogModelComponent } from '../../dialogsModel/dialog-model/dialog-model.component';
// @Component({
//   selector: 'app-registration',
//   templateUrl: './registration.component.html',
//   styleUrls: ['./registration.component.css']
// })
// export class RegistrationComponent implements OnInit {
//   reorderable: boolean = true;
//   loadingIndicator: boolean = false;
//   thisYear: Date = new Date();
//   nextYear = this.thisYear.getFullYear()+1;
//   title = "Registrations"

//   // ColumnMode = ColumnMode;
//   // selected = [];
//   SelectionType = SelectionType;
//     columns = [{prop:'id',name:'Id'},{name:'FirsName',prop:'firstName'}, {name:'LastName',prop:'lastName'},{name:'cin',prop:'cin'},
//               {name:'Email',prop:'email'},{name:'Phone',prop:'phone'},{name:'City',prop:'city'}];
  
//   rows:Registration[]=[];
//   temp:Registration[]=[];

//     pageSize:number =5;
//     pageNumber:number;
//     totalElement:number;
//     currentPage:number;
//     totalPages:number;

//     constructor(private _reg:RegisterService,public dialog: MatDialog) {
//     }
//     ngOnInit() {
//       this.getRegisters({offset:0});
//     }
//       getRegisters(pageInfo){
//         this.pageNumber = pageInfo.offset;
//         this._reg.getRegistrations(this.pageSize,this.pageNumber).subscribe(registration=>{
//           this.rows = registration['data'].registers;
//           this.totalElement = registration['data'].totalElements;
//           this.totalPages = registration['data'].totalPages;
//           this.pageNumber = registration['data'].currentPage;
//           this.temp = this.rows;
//         })
//       }
//       onRefrech(){
//         this.getRegisters({offset:0});
//       }
//   // onSelect({ selected }) {
//   //   selected.stopPropagation
//   //   this.openDialog(selected);
//   // }

//   // openDialog(selected) {
//   //   const dialogRef = this.dialog.open(DialogModelComponent,{data:selected});
//   //   dialogRef.afterClosed().subscribe(result => {
//   //     if(result){
//   //       window.location.reload();
//   //     }
//   //   }); 
//   //  }
//   //  disable = true;
//   //  test(event){
//   //    console.log("disabling")
//   //    event.stopPropagation();
//   //  }
//   //  filterRegistration(event){
//   //    const val = event.target.value.toLowerCase();
//   //     const temp = this.temp.filter(elem=>{
//   //       return elem.firstName.toLowerCase().indexOf(val)!=-1 ||!val||
//   //              elem.lastName.toLowerCase().indexOf(val)!=-1||
//   //              elem.levelStudy.toLowerCase().indexOf(val)!=-1||
//   //              elem.classLevel.toLowerCase().indexOf(val)!=-1;
//   //     });
//   //    this.rows = temp;
//   //  }
//   //  addStudent(){
//   //   const dialogRef = this.dialog.open(AddStudentComponent);
//   //   dialogRef.afterClosed().subscribe(result => {
//   //     if(result){
//   //       window.location.reload();
//   //       // console.log("********************* result is **"+result);
//   //       // console.log(result);
//   //       //  this.rows = [...this.rows,...result];
//   //       // // this.getRegisters();
//   //       // document.getElementById("refrech").click();
//   //     }
//   //   })
//   //  }
//   //  refrech(){
//   //    this.getRegisters({offset:0});

//   //  }
//   //  checkSelectable(event){
//   //    console.log(event);
//   //    return event ;
//   // }
// }
