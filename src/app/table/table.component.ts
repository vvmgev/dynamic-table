import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend/backend.service';
import { SortServiceService } from '../services/sort/sort-service.service';
import { FilterServiceService } from '../services/filter/filter-service.service';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  config: any = {};
  items: any = [];
  from: any = 0;
  limit: any = 5;
  end: any = false;

  constructor(private backendService : BackendService,
              private sortService: SortServiceService,
              private filterService: FilterServiceService) {
  }

  ngOnInit(): void {
    this.getData()
  }

  getData(): any {
    if(this.end) return;
    const {from, limit } = this;
    this.backendService.getData(from, limit).then(({data, end}: any) => {
      this.from += data.items.length
      this.end = end;
      this.items = [...this.items, ...data.items];
      this.config = {...this.config, ...this.filter(data.config)};
    })
  }

  loadMore(): void {
    this.getData();
  }

  onSort(property, ordering) :void {
    this.items = this.sortService.sortBy(property, ordering, this. items);
  }

  filter(data): any {
    return this.filterService.filterBy('include', data);
  }

}
