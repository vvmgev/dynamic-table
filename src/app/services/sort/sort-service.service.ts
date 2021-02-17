import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortServiceService {

  constructor() { }

  sortBy(property, ordering, data): any {
    return [...data].sort((a, b) => {
      const condition = ordering === 'asc' ? (a[property] > b[property]) : (a[property] < b[property])
      return condition ? 1 : -1 
    })
  }
}
