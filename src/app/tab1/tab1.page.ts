import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  lat: any;
  lng: any;
  url;

  constructor() { 
    this.locationFinder(6.9272, 79.8451);
  }

  locationFinder(lan, lng) {
    this.url = 'https://www.google.com/maps/dir/?api=1&destination='+ lan + '%2C' + lng + '&travelmode=driving';
    console.log('locationFinder');
    return this.url;
  }

}
