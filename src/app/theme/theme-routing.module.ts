import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../core/guards/auth.active';
import { MainComponent } from '../main/main.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { NewThemeComponent } from './new-theme/new-theme.component';

const routes: Routes = [
  {
    path: 'themes',
    children: [
        {
            path: '',
            pathMatch: 'full',
            component: MainComponent,
        },
        {
            path: ':themeId',
            component: CurrentThemeComponent,
        }, 
    ],

  },
  {
    path: 'add-theme',
    component: NewThemeComponent,
    canActivate: [AuthActivate],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }