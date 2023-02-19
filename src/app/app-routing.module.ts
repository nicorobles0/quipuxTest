import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionGuard } from '@private/shared/guards/n.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/public/public.module').then((m) => m.PublicModule),
  },
  {
    path: 'app',
    loadChildren: () =>
      import('./modules/private/private.module').then((m) => m.PrivateModule),
    canActivate: [SessionGuard],
  },
  { path: '**', pathMatch: 'full', redirectTo: 'app' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
