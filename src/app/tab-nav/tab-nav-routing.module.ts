import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabNavPage } from './tab-nav.page';

const routes: Routes = [
  {
    path: '',
    component: TabNavPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabNavPageRoutingModule { }
