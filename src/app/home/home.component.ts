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
  filteredLocationList: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService);

  // constructor function
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }

  filterResults(text: string){
    if(!text) {
      this.filteredLocationList = this.housingLocationList;
    }
    else{ 
      this.filteredLocationList = this.housingLocationList.filter( x => x?.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())
      || x?.city.toLocaleLowerCase().includes(text.toLocaleLowerCase())
      || x?.state.toLocaleLowerCase().includes(text.toLocaleLowerCase())
      );
    }
  }
}
