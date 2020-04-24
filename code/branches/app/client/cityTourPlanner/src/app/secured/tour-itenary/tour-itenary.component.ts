import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tour-itenary',
  templateUrl: './tour-itenary.component.html',
  styleUrls: ['./tour-itenary.component.scss'],
})
export class TourItenaryComponent implements OnInit {
  tourItinerary: any = {};
  meals: [];
  closeResult: string;
  tourReady: boolean;
  elRef: ElementRef;

  public appId: any;
  public appCode: any;

  public start: string;
  public finish: string;

  constructor(
    private router: Router,
    private modalService: NgbModal,
    elRef: ElementRef
  ) {
    this.elRef = elRef;
  }

  ngOnInit() {
    // add meals to tourItinerary and poof!
    // remove distance calculation and use only show directions
    this.tourReady = false
    const itineraryData = this.router.getCurrentNavigation().extras.state.data;

    this.meals = this.router.getCurrentNavigation().extras.state.meals
    for (let meal of this.meals){
      itineraryData.splice(meal['index'], 0, meal);
    }
    this.tourReady = true;
  
    this.tourItinerary = itineraryData;
  }


  open(content) {
    this.modalService.open(content)
  }

  getDirectionsUrl(currentIndex, allItems) {
    const start = allItems[currentIndex - 1].venue.location;
    const end = allItems[currentIndex].venue.location;
    const googleMapsApiUrl = 'https://www.google.com/maps/dir/?api=1';

    return `${googleMapsApiUrl}&origin=${start.lat},${start.lng}&destination=${end.lat},${end.lng}`;
  }


  endTour() {
    this.router.navigate(['home'], { state: { data: { endTour: true } } });
  }

  getImageUrl(photo) {
    return photo.prefix && photo.suffix ?
      `${photo.prefix}${photo.width}x${photo.height}${photo.suffix}` : '';
  }

  getFormattedAddress(formattedAddress) {
    return formattedAddress.join(', ')
  }
}
