
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';


import { EmployeeService } from './Services/empservice.service'
import { FetchEmployee } from './Component/fetchemployee/fetchemployee.component';
import { createemployee } from './Component/addemployee/addemployeecomponent'

import { RegComponent } from './Register/Register';
import { NgxPaginationModule } from 'ngx-pagination';
//import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    FetchEmployee,
    createemployee,
    RegComponent
  ],
  imports: [
   BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    //DataTablesModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'Register', component: RegComponent },
      { path: 'fetchemployee', component: FetchEmployee },
      { path: 'register-employee', component: createemployee },
      { path: 'employee/edit/:id', component: createemployee },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  //exports: [RouterModule],
  /* providers: [],*/
  providers: [EmployeeService],
  //providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
