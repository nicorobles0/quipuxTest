import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivateLayoutComponent } from './shared/layoud/private-layout/private-layout.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateLayoutComponent,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
      }
    ]
  }

]

@NgModule({
  
  imports: [
    RouterModule.forChild(routes)  
  ],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
