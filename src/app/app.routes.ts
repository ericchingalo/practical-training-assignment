import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages';
import { CompletenessComponent } from './pages/completeness/completeness.component';
import { OrgnisationUnitDetailsComponent } from './pages/orgnisation-unit-details/orgnisation-unit-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'completeness', pathMatch: 'full' },
      { path: 'completeness', component: CompletenessComponent },
      { path: 'orgunit/:id', component: OrgnisationUnitDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class RoutingModule {}
