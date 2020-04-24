import { Component, OnInit } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { point, distance } from '@turf/turf';
import { Router } from '@angular/router';
import { ApiServiceService } from '../../../services/api-service.service';

import {
  CITIES,
  museumOptions, entertainmentOptions, foodOptions, buildingsOptions,
  outdoorsAndRecreationOptions, shoppingOptions, performingArtsOptions
} from './constants';

const mealOptions = [
  { name: 'Breakfast', value: 'breakfast', selected: false },
  { name: 'Lunch', value: 'lunch', selected: false },
  { name: 'Dinner', value: 'dinner', selected: false },
];

const timeOptions = [
  {
    name: '1 hour', value: '1', spotsCount: 18,
    mealIndexes: {
      breakfast: 3, lunch: 7, dinner: 12
    }
  },
  {
    name: '1 hour 30', value: '1:30', spotsCount: 12,
    mealIndexes: {
      breakfast: 3, lunch: 6, dinner: 10
    }
  },
  {
    name: '2 hours', value: '2', spotsCount: 8,
    mealIndexes: {
      breakfast: 0, lunch: 4, dinner: 7
    }
  },
];

@Component({
  selector: 'app-create-tour',
  templateUrl: './create-tour.component.html',
  styleUrls: ['./create-tour.component.scss'],
})
export class CreateTourComponent implements OnInit {
  totalSelected: number = 0;
  minSelectCount: number = 4;
  maxSelectCount: number = 8;

  // buttons status
  disableCreateButton: boolean = true;
  disableButton: boolean = true;

  // enable venues accordion
  disbaleAccordion: boolean = true;

  city: string = '';
  time: string = '';
  showWarning: boolean = false;
  showAdressWarning: boolean = false;
  showSelectMealWarning: boolean = false;
  tourItenaryGenerated: boolean = false;

  // values for min and max based on time selection
  totalTourItems: number = 0;
  noOfTourItemsToSelect: number = 0;
  tourItemsSelected: number = 0;
  selectedTourItems: number = 0;

  selectedDraftItems: Array<any> = [];
  // selectedDraftItemsIds: Array<any> = [];

  // meals and venuesId
  selectedMealId: Array<string> = []
  selectedDraftItemsIds: Array<any> = [];

  tourItenary: Array<any> = [];
  selectedMealOptions: Array<string> = [];
  selectedMeals: Object = {};

  formContent: any;
  formData: any;
  activeStepIndex: number;
  itenarnaryDraftGenerated: boolean = false;
  itenarnaryDraft: any = [];
  meals: any = [];
  totalMeal: number;
  itenarnaryCreated: boolean = false;
  cities: any = CITIES;

  // Preference options
  museumOptions: any = museumOptions;
  entertainmentOptions: any = entertainmentOptions;
  foodOptions: any = foodOptions;
  outdoorsAndRecreationOptions: any = outdoorsAndRecreationOptions;
  shoppingOptions: any = shoppingOptions;
  buildingsOptions: any = buildingsOptions;
  performingArtsOptions: any = performingArtsOptions;
  mealOptions: any = mealOptions;
  timeOptions: any = timeOptions;

  constructor(
    config: NgbAccordionConfig,
    private apiService: ApiServiceService,
    private router: Router
  ) {
    config.closeOthers = true;

  }

  ngOnInit() {
    this.formData = {};
  }

  selectMeal(meal) {
    if (meal.selected && this.selectedMealOptions.indexOf(meal.value) == -1) {
      this.selectedMealOptions.push(meal.value);
    }
    if (!meal.selected && this.selectedMealOptions.indexOf(meal.value) != -1) {
      this.selectedMealOptions.splice(this.selectedMealOptions.indexOf(meal.value), 1);
    }
  }

  selectMealOption(event, meal, key) {
    const spotsCount = this.noOfTourItemsToSelect + this.totalMeal;
    const mealOption = this.timeOptions.find(option => option.spotsCount == spotsCount);

    meal['index'] = mealOption.mealIndexes[key];
    meal['label'] = key;

    if (meal.selected && event.target.checked) {
      this.selectedMeals[key] = meal;
    }
  }

  addItemToInterests(item) {
    if (this.formData['interests'] && this.formData['interests'].indexOf(item) == -1) {
      this.formData['interests'].push(item)
    } else {
      this.formData['interests'] = [item]
    }
  }

  removeItemFromInterests(item) {
    if (this.formData['interests'] && this.formData['interests'].indexOf(item) > -1) {
      this.formData['interests'].splice(this.formData['interests'].indexOf(item), 1)
    }
  }

  updateButtonStatus() {
    this.totalSelected < this.minSelectCount || this.totalSelected > this.maxSelectCount ?
      this.disableButton = true : this.disableButton = false;
  }

  updateCreateTourButtonStatus() {

    this.totalSelected < this.minSelectCount || this.totalSelected > this.maxSelectCount ?
      this.disableButton = true : this.disableButton = false;
  }

  updateTotalSelected(item, category) {
    if (item.selected) {
      this.totalSelected++
      this.addItemToInterests(item.value);
    } else {
      this.totalSelected--;
      this.removeItemFromInterests(item.value);
    }

    this.updateButtonStatus();
  }

  submitPreference(formData) {
    if (!this.city) {
      this.showWarning = true;
    } else {
      this.showWarning = false;
      this.apiService.createTour({
        city: this.city,
        interests: formData.interests,
        meals: this.selectedMealOptions
      })
        .then(responses => {
          this.itenarnaryDraftGenerated = true;
          this.itenarnaryDraft = responses.response;
          this.meals = responses.meals;
          this.totalMeal = this.meals.length;
        })
        .catch(error => {
          console.log(error, 'API error')
        })
    }
  }

  getImageUrl(photo) {
    return photo.prefix && photo.suffix ?
      `${photo.prefix}${photo.width}x${photo.height}${photo.suffix}` : '';
  }

  getFormattedAddress(formattedAddress) {
    return formattedAddress.join(', ')
  }

  // add third parameter of key, if it has key, add it to meals, else tour items
  updateSelectedDraftItems(event, item) {
    const itemIndex = this.selectedDraftItems.map((item) => item.venue.id).indexOf(item.venue.id);

    if (event.target.checked) {
      this.selectedDraftItems.push(item)
    } else {
      this.selectedDraftItems.splice(itemIndex, 1);
    }

    this.noOfTourItemsToSelect == this.selectedDraftItems.length ?
      this.disableCreateButton = false : this.disableCreateButton = true;
  }

  sortByDistance(startLocation) {
    const startPoint = point([startLocation.venue.location.lng, startLocation.venue.location.lat])
    return this.selectedDraftItems.sort((a, b) => {
      a.distance = distance(startPoint, point([a.venue.location.lng, a.venue.location.lat]), { units: 'kilometers' })
      b.distance = distance(startPoint, point([b.venue.location.lng, b.venue.location.lat]), { units: 'kilometers' })

      return a.distance - b.distance
    })

  }

  async createTourItinerary() {
    if (Object.keys(this.selectedMeals).length != this.totalMeal) {
      this.showSelectMealWarning = true;
    } else {
      this.showSelectMealWarning = false;
      this.tourItenaryGenerated = true;
      this.itenarnaryDraftGenerated = false;

      this.tourItenary = this.sortByDistance(this.selectedDraftItems[0]);
      const newItems = this.calculateDistanceBetweenVenues(this.tourItenary);
      
      this.router.navigate(['itinerary'], {
        state: {
          data: newItems,
          meals: Object.values(this.selectedMeals)
        }
      });
    }
  }

  calculateDistanceBetweenVenues(items) {
    return items.map((item, index) => {
      if (index != 0) {
        // round off the distance to the nearest decimal place
        item.newDistance = Math.round(distance(
          point([items[index - 1].venue.location.lng, items[index - 1].venue.location.lat]),
          point([item.venue.location.lng, item.venue.location.lat]),
          { units: 'kilometers' }
        ) * 10) / 10
      }

      return item;
    })
  }

  updateSpotSelectionCount(spotsCount) {
    this.noOfTourItemsToSelect = spotsCount - this.totalMeal;
    this.disbaleAccordion = false
  }

}
