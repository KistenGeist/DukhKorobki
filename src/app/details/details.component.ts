import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../Services/housing.service';
import { Housinglocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})

export class DetailsComponent {
  // get route 
  route: ActivatedRoute = inject(ActivatedRoute);
  // create variable of idParam
  housingLocationId: number = -1;
  housingService: HousingService = inject(HousingService);
  housingLocation!: Housinglocation | undefined;

  // create form
  applyForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
  })
  
  constructor() {
    // get id param
    this.housingLocationId = Number(this.route.snapshot.params["id"]);
    this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationId);
  }

  submitApplication() {
    this.housingService.submitApllication(this.applyForm.value.firstName ?? "", this.applyForm.value.lastName ?? "", this.applyForm.value.email ?? "")
  }
}
