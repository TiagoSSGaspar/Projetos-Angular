import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingComponent} from './dashboard-routing.component';


export const DashBoardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardRoutingComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(DashBoardRoutes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule {
}

