import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../Services/housing.service';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
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
  
  constructor() {
    // get id param
    this.housingLocationId = Number(this.route.snapshot.params["id"]);
    this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationId);
  }
}
