import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableControllerComponent } from './tableController/tableController/table-controller.component';
import { TableComponent } from './table/table.component';



const routes: Routes = [
  {path: 'home', component: TableComponent},
  {path: 'dashboard', component: TableControllerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
