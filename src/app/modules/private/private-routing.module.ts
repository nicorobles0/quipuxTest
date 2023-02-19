import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivateLayoutComponent } from './shared/layout/private-layout/private-layout.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./my-music/my-music.module').then((m) => m.MyMusicModule),
      }
    ]
  },
]

@NgModule({
  
  imports: [
    RouterModule.forChild(routes)  
  ],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
