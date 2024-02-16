import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service'; 

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrl: './show-dep.component.css'
})
export class ShowDepComponent implements OnInit{
 constructor(private service:SharedService) {}
 DepartmentList:any=[];


ModalTitle:string="";
 ActiveAddEditDepComp:boolean=false;
 dep:any;

 DepartmentIdFilter:string="";
 DepartmentNameFilter:string="";
 DepartmentListWithoutFilter:any=[];

ngOnInit(): void {
  this.refreshDepList(); 
}
addClick() 
{
  this.dep={
    DepartmentId:0,
    DepartmentName:""
  }
  this.ModalTitle="Add Department";
  this.ActiveAddEditDepComp=true;
}
editClick(item:any)
{
 this.dep=item;
 this.ModalTitle="Edit Departemnt";
 this.ActiveAddEditDepComp=true;

}
deleteClick(item:any)
{
  if(confirm('Are you Sure ??')){
    this.service.deleteDepartment(item.DepartmentId).subscribe(data=>{
      alert(data.toString());
      this.refreshDepList();
    })
  }
}
closeClick()
{
  this.ActiveAddEditDepComp=false;
  this.refreshDepList();
}

refreshDepList(){
  this.service.getDepList().subscribe(data=>{
    this.DepartmentList=data;
    this.DepartmentListWithoutFilter=data;
  });
}
FilterFn()
{
  this.DepartmentIdFilter=this.DepartmentIdFilter;
  this.DepartmentNameFilter=this.DepartmentNameFilter;
  this.DepartmentList=this.DepartmentListWithoutFilter.filter((el:any)=>{
           return el.DepartmentId.toString().toLowerCase().includes(
             this.DepartmentIdFilter.toString().trim().toLowerCase()
           )&&
           el.DepartmentName.toString().toLowerCase().includes(
            this.DepartmentNameFilter.toString().trim().toLowerCase()
           )
  });
}
sortResult(prop:any, asc:any) {
  this.DepartmentList = this.DepartmentListWithoutFilter.sort((a:any, b:any) => {
    if (asc) {
      return a[prop] > b[prop] ? 1 : a[prop] < b[prop] ? -1 : 0;
    } else {
      return b[prop] > a[prop] ? 1 : b[prop] < a[prop] ? -1 : 0;
    }
  });
}
}
