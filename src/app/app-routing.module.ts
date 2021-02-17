import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'home', component: TableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
