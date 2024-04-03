import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form: FormGroup;
  isButtonDisabled = true;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(30),
          Validators.pattern('^[a-zA-Z ]+$'),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(30),
          Validators.pattern('^[a-zA-Z ]+$'),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(30),
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ],
      ],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]{4}-[0-9]{3}-[0-9]{4}$'),
        ],
      ],
    });
  }

  getErrorMessage(errorName: string, controlName: string, param?: string) {
    switch (errorName) {
      case 'required':
        return `${controlName} is required`;
      case 'minLength':
        return `At least ${param} characters`;
      case 'maxLength':
        return `At most ${param} characters`;
      case 'pattern':
        return `Invalid ${controlName}`;
      default:
        return 'Unknown error type';
    }
  }

  isValid(name: string): boolean {
    let control = this.form.controls[name];
    return control.invalid && this.form.invalid && control.touched;
  }

  hasError(controlName: string, errorName: string) {
    let control = this.form.controls[controlName];
    return control.errors?.[errorName];
  }
}
