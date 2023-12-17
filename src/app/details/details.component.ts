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
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId: number = -1;
  
  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params["id"]);
  }
}
