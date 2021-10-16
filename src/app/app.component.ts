import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
userName:string;
passWord:string;
phoneNum:string;
ans:string;
gen:string;
Job:string;
jobDes:string;
question:string;
mail:string;
sal:string;
 onSubmit(form: NgForm){
  this.userName=form.value.username;
  this.passWord=form.value.password;
  this.mail=form.value.email;
  this.phoneNum=form.value.phone;
  this.ans=form.value.answer;
  this.question=form.value.secret;
  this.gen=form.value.gender;
  this.Job=form.value.job;
  this.jobDes=form.value.jobdescription;
  this.sal=form.value.salary;
 }
 
 
  
}
