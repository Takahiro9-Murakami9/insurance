import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.sass']
})
export class CarFormComponent implements OnInit {
  carForm!: FormGroup;
  calculatedPremium!: number;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.carForm = this.fb.group({
      carAge: [null, Validators.required],
      carType: [null, Validators.required],
      carMaker: [null, Validators.required],
      carModel: [null, Validators.required],
      carDisplacement: [null, Validators.required],
      carFuelType: [null, Validators.required],
      carOwner: [null, Validators.required],
      carOwnership: [null, Validators.required],
      carMileage: [null, Validators.required],
      carInsuranceAmount: [null, Validators.required]
    })
  }

  onFormSubmit() {
    if (this.carForm.valid) {
      const age = this.carForm.value.carAge;
      const mileage = this.carForm.value.carMileage;

      this.calculatedPremium = age * mileage * 0.1;
    }
  }
}
