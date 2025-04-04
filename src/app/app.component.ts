import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'student-registration-app';

student = {name:'',age: null,email:'',course:'', grade:null};
students: any[] = [];
courses = ['Computer Science', 'Mechanical', 'Civil', 'Electrical', 'Electronics'];

registerStudent() {
if(this.student.name && this.student.age && this.student.email && this.student.course && this.student.grade){
  this.students.push({ ...this.student});
  this.resetForm();
}
}

deleteStudent(index: number) {
  this.students.splice(index, 1);
}

resetForm() {
  this.student = { name: '', age: null, email: '', course: '', grade:null };
}

getGradeClass(grade: number): string {
  if (grade >= 0 && grade <= 39) {
    return 'red-bg';
  } else if (grade >= 40 && grade <= 60) {
    return 'yellow-bg';
  } else if (grade >= 61 && grade <= 80) {
    return 'blue-bg';
  } else if (grade >= 81 && grade <= 100) {
    return 'green-bg';
  }
  return '';
}

}
