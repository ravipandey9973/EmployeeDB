import { Component, Input } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrl: './add-edit-emp.component.css'
})
export class AddEditEmpComponent {
constructor(private service:SharedService) {}
@Input() emp:any;
EmployeeId:string="";
EmployeeName:string="";
Department:string="";
DateOfJoining:string="";
PhotoFileName:string="";
PhotoFilePath:string="";

DepartmentList:any=[];

ngOnInit(): void {
this.loadDepartmentList();
}

loadDepartmentList()
{
  this.service.getAllDepartmentNames().subscribe((data:any)=>{
   this.DepartmentList=data;

   this.EmployeeId=this.emp.EmployeeId;
   this.EmployeeName=this.emp.EmployeeName;
   this.Department=this.Department;
   this.DateOfJoining=this.DateOfJoining;
   this.PhotoFileName=this.PhotoFileName;
   this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
  });
}

addEmployee()
{
var val = {EmployeeId:this.EmployeeId,
          EmployeeName:this.EmployeeName,
          Department:this.Department,
          DateOfJoining:this.DateOfJoining,
          PhotoFileName:this.PhotoFileName

        };
this.service.addEmployee(val).subscribe(res=>{
  alert(res.toString());
});
}

updateEmployee()
{
var val = {EmployeeId:this.EmployeeId,
EmployeeName:this.EmployeeName,
Department:this.Department,
DateOfJoining:this.DateOfJoining,
PhotoFileName:this.PhotoFileName
};
this.service.updateEmployee(val).subscribe(res=>{
alert(res.toString());

});
}

uploadPhoto(event:any){
  var file=event.target.files[0];
  const formData:FormData=new FormData();
  formData.append('uploadedFile',file,file.name);

  this.service.UploadPhoto(formData).subscribe((data:any)=>{
       this.PhotoFileName=data.toString();
       this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
  })
 
}

}
