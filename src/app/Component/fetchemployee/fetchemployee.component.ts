import { Component, OnInit,inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Post } from '../../Services/Post'
import { EmployeeService } from '../../Services/empservice.service'
//import { Console } from 'console';


//@Component({
//  selector: 'app-fetchemployee',
//  //templateUrl:'./fetchemployee.component.html'
//})
//@Component({
//  selector: 'app-index',
//  templateUrl: './index.component.html',
//  styleUrls: ['./index.component.css']
//})
//@Component({
//  templateUrl: './fetchemployee.component.html'
//})


  @Component({
    selector: 'app-fetchemployee',
    templateUrl: './fetchemployee.component.html'
  })
export class FetchEmployee {
  empList: Post[] = [];
    date = new Date();
    //page: number=1;
    //TotalRecords: string ;
    //dtOptions: DataTables.Settings = {};
  /*------------------------------------------
 --------------------------------------------
 Created constructor
 --------------------------------------------
 --------------------------------------------*/
 /* constructor(public EmployeeService: EmployeeService) { }*/

    //ngOnInit(): void {
    //  this.dtOptions = {
    //    pagingType: 'full_numbers',
    //    pageLength: 5,
    //    processing: true
    //  };
    //}

    constructor(private _employeeService: EmployeeService) {
     //this.GetData();
      this.getEmployees();
    }
    //GetData = () => {
    //  this._employeeService.getdata().subscribe(
    //    data => {
    //      alert(data.toString()
    //      );
    //    });
    //}


    getEmployees = () => {
      this._employeeService.getEmployees().subscribe(
        data => {
          this.empList = data
          //this.TotalRecords = data.results.length
        }
      )
    }

  //constructor(private _employeeService: EmployeeService) {
  //  this._employeeService.getEmployees().subscribe((data: Post[]) => {
  //    this.empList = data;
  //    console.log(this.empList);
  //  })
  //  }


  

    delete(id: number) {
      var ans = confirm("Do you want to delete customer with Id: " + id);
      if (ans) {
        this._employeeService.deleteEmployee(id).subscribe(res => {
          this.empList = this.empList.filter(item => item.employeeId !== id);
          this.getEmployees();
          console.log('deleted successfully!');
        })
      }
    }



   



  /**
   * Write code on Method
   *
   * @return response()
   */
  //ngOnInit(): void {
  //  this.EmployeeService.getEmployees().subscribe((data: Post[]) => {
  //    this.posts = data;
  //    console.log(this.posts);
  //  })
  //}


  
}

//interface EmployeeData {
//  employeeId: number;

//}
