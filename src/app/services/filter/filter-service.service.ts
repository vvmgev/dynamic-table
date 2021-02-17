import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterServiceService {

  constructor() { }

  filterBy(property, data) {
    let obj = {}
    Object.keys(data).forEach(key => {
      if(data[key][property]) {
        obj[key] = data[key];
      }
    })
    return obj;
  }
}
