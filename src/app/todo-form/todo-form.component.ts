import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  userForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.userForm = fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    });
   }

  ngOnInit() {
  }

  saveUser(){
    alert("Name: " + this.userForm.get('name').value + ", Email: " + this.userForm.get('email').value);
  }

}
