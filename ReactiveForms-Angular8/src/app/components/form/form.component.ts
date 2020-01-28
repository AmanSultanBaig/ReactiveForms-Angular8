import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  profileForm: FormGroup;
  constructor(private _formBuilder: FormBuilder) {
    
    this.profileForm = this._formBuilder.group({
      firstName: ['Aman',Validators.required],
      lastName: ['Sultan'],
      address: this._formBuilder.group({
        street: ['123, Abc'],
        city: ['Cape Town'],
        state: ['-'],
        zip: ['12232']
      }),
      DynamicControl: this._formBuilder.array([
        this._formBuilder.control('')
      ])
    
    });
  
  }

  get DynamicControl() {
    return this.profileForm.get('DynamicControl') as FormArray;
  }

  addControl() {
    this.DynamicControl.push(this._formBuilder.control(''));
  }
  

  updateProfile(){
    console.log(this.profileForm.value);
  }

  ngOnInit() {
  }

}
