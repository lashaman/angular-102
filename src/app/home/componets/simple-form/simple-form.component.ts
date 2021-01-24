import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormsModule, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  contact = this.fb.group({
    firstname: ['' , [Validators.required, Validators.minLength(3)]],
    lastname:  ['', [ Validators.required, Validators.minLength(3)]],
    gender:  ['male', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log('form submitted');
  }

}
