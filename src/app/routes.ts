import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserMealsComponent } from './user-meals/user-meals.component';
import { UserExercisesComponent } from './user-exercises/user-exercises.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AuthGuard } from './_guards/auth.guard';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserEditResolver } from './_resolvers/user-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
      path: '',
      runGuardsAndResolvers: 'always',
      canActivate: [AuthGuard],
      children: [
        { path: 'centre', component: UserDashboardComponent},
        { path: 'exercises', component: UserExercisesComponent},
        { path: 'meals', component: UserMealsComponent},
        { path: 'user/edit', component: UserEditComponent,
           resolve: {user: UserEditResolver}, canDeactivate: [PreventUnsavedChanges]},
      ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
