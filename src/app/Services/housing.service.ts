import { Injectable } from '@angular/core';
import { Housinglocation } from '../housinglocation';

@Injectable({
  providedIn: 'root'
})

export class HousingService {
  url: string = 'http://localhost:3000/locations';

  // function to return full list of housingLocations
  async getAllHousingLocations(): Promise<Housinglocation[]> {
    const data = await fetch(`${this.url}`);
    return (await data.json()) ?? [];
  }

  // function to return housingLocatoin by id
  async getHousingLocationById (id: number): Promise<Housinglocation | undefined> {
    //return this.housingLocationList.find( x => x.id === id)
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  submitApllication(firstName: string, lastname: string, email: string){
    console.log(`Homes application received: firstname: ${firstName}, lastname: ${lastname}, email: ${email}`);
  }

  constructor() { }
}