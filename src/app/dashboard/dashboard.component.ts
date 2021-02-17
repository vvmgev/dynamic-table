import { Component, OnInit } from '@angular/core';
import { getAllData, setType } from '../../backend';

// this component has priority it can direct modify the data
// treated as admin section

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  allData: any;
  currentData: any

  constructor() { }

  ngOnInit(): void {
    this.allData = getAllData();
    console.log('this.allData', this.allData)
  }

  onChangeType(event): void {
    const { target : { value } } = event;
    if(value) {
      this.currentData = this.allData[value];
      setType(value)
    }
  }

  onChange(event, key, isCheckbox) {
    const { target } = event;
    const value = isCheckbox ? target.checked : target.value;
    this.currentData.config[key][target.name] = value
  }
}