import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../Services/housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  // component global variables
  housingLocationList: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService);

  // constructor function
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

}
