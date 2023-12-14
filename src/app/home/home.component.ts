import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  //templateUrl: './home.component.html',
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by City"/>
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location [housinglocation]="housinglocation"></app-housing-location>
    </section>`,
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/tutorials/common';

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
}
