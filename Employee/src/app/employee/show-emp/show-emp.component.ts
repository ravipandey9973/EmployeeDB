import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service'; 

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrl: './show-emp.component.css'
})
export class ShowEmpComponent implements OnInit{
  constructor(private service:SharedService) {}
  EmployeeList:any=[];
 
 
 ModalTitle:string="";
  ActiveAddEditEmpComp:boolean=false;
  emp:any;
 
 ngOnInit(): void {
   this.refreshEmpList(); 
 }
 addClick() 
 {
   this.emp={
     EmployeeId:0,
     EmployeeName:"",
     Department:"",
     DateOfJoining:"",
     PhotoFileName:"anonymous.png"
   }
   this.ModalTitle="Add Employee";
   this.ActiveAddEditEmpComp=true;
 }
 editClick(item:any)
 {
  
  this.emp=item;
  this.ModalTitle="Edit Employee";
  this.ActiveAddEditEmpComp=true;
 
 }
 deleteClick(item:any)
 {
   if(confirm('Are you Sure ??')){
     this.service.deleteEmployee(item.EmployeeId).subscribe(data=>{
       alert(data.toString());
       this.refreshEmpList();
     })
   }
 }
 closeClick()
 {
   this.ActiveAddEditEmpComp=false;
   this.refreshEmpList();
 }
 
 refreshEmpList(){
   this.service.getEmpList().subscribe(data=>{
     this.EmployeeList=data;
   });
 }


}
