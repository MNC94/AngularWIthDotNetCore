
import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
//import { FetchEmployee } from '../fetchemployee/fetchemployee.component';
import { EmployeeService } from '../../Services/empservice.service';
import { Post } from '../../Services/Post'
import Validation from '../../utils/Validation';



import { Router, ActivatedRoute } from '@angular/router';
//import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-register-employee',
  templateUrl: './addemployeecomponent.html'
})


export class createemployee implements OnInit {
  empList: Post[] = [];

  //employeeForm = new FormGroup({
  //  name: new FormControl(''),
  //  gender: new FormControl(''),
  //});
  employeeForm: FormGroup;
  submitted = false;
  title: string = "Create";
  //employeeForm: FormGroup;
  //title: string = "Create";
  employeeId: number=0;
  errorMessage: any;
  cityList: Array<any> = [];

  //employeeForm: FormGroup = new FormGroup({
  //  employeeId: new FormControl(0, []),
  //  department: new FormControl('', [Validators.required]),
  //  name: new FormControl('', [Validators.required]),
  //  gender: new FormControl('', [Validators.required]),
  //  // department: ['', [Validators.required]],
  //  city: new FormControl('', [Validators.required]),
  //  doj: new FormGroup('', [Validators.required])
  //});
  
  
  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
    private _employeeService: EmployeeService, private _router: Router) {
    if (this._avRoute.snapshot.params["id"]) {
      this.employeeId = this._avRoute.snapshot.params["id"];

    }



   

    //this.employeeForm = new FormGroup({
    //  employeeId: new FormControl(0,[]),
    //  name: new FormControl('', [Validators.required]),
    //  gender: new FormControl('', [Validators.required]),
    //  department: new FormControl('', [Validators.required]),
    //  city: new FormControl('', [Validators.required])
    //})

  //  this.employeeForm = this._fb.group({
  //    employeeId: 0,
  //    name: ['', [Validators.required]],
  //    gender: ['', [Validators.required]],
  //    department: ['', [Validators.required]],
  //    city: ['', [Validators.required]]
  //  })


    this.employeeForm = this._fb.group({
     employeeId: 0,
      name: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      department: ['', [Validators.required]],
      city: ['', [Validators.required]],
      doj: ['', [Validators.required]]
    })


  }


  ngOnInit() {
    //this.employeeForm = this._fb.group({
    //  employeeid: 0,
    //  name: ['', Validators.required],
    //  gender: ['', Validators.required],
    //  department: ['', Validators.required],
    //  city: ['', Validators.required]
    //});
  


    this._employeeService.getCityList().subscribe(
      data => this.cityList = data
    )
    if (Number(this.employeeId) > 0) {
      this.title = "Edit";
      this._employeeService.getEmployeeById(Number(this.employeeId))
          .subscribe(resp => this.employeeForm.setValue(resp)
            , error => this.errorMessage = error);  
          
    } 

  }

  save() {
    this.submitted = true;
   
      
    
    //this.name = this.employeeForm.get('name');
    //this.gender = this.employeeForm.get('gender')?.value;
    //this.department = this.employeeForm.get('department')?.value;
    //this.city =this.employeeForm.get('city')?.value;


    console.log(this.employeeForm.value);
    if (this.employeeForm.invalid) {
      return;
    }

    if (this.title == "Create") {
      this._employeeService.saveEmployee(this.employeeForm.value)
        .subscribe((data) => {
          this._router.navigate(['/fetchemployee']);
        }, error => this.errorMessage = error)
    }
    else if (this.title == "Edit") {
      this._employeeService.updateEmployee(this.employeeForm.value)
        .subscribe((data) => {
          this._router.navigate(['/fetchemployee']);
        }, error => this.errorMessage = error)
    }
  }

  cancel() {
    this.submitted = false;
    this.employeeForm.reset();
    this._router.navigate(['/fetchemployee']);
      }  


      
  get f(): { [key: string]: AbstractControl } {
    return this.employeeForm.controls;
  }
 

    }
 

