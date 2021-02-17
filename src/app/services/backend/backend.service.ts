import { Injectable } from '@angular/core';
import { getData as getDataFromBackend} from '../../../backend';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  data: any;

  constructor() {}

  getData = (from ,limit) => {
    return new Promise(resolve => {
      resolve(getDataFromBackend(from ,limit))
    })
  };

}
