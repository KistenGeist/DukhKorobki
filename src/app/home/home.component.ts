import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  // get image
  readonly baseUrl = 'https://angular.dev/assets/tutorials/common';

  // create object of type Housinglocation 
  housinglocation: Housinglocation = {
    id: 9999,
    name: "Test Home",
    city: "Test City",
    state: "ST",
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false
  };
  // --> this will be exported into its binding in home.component.html
}
