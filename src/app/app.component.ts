import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'student-registration-app';

student = {name:'',age: null,email:'',course:''};
students: any[] = [];
courses = ['Computer Science', 'Mechanical', 'Civil', 'Electrical', 'Electronics'];

registerStudent() {
if(this.student.name && this.student.age && this.student.email && this.student.course){
  this.students.push({ ...this.student});
  this.resetForm();
}
}

deleteStudent(index: number) {
  this.students.splice(index, 1);
}

resetForm() {
  this.student = { name: '', age: null, email: '', course: '' };
}

}
