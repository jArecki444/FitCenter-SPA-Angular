import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { CreationUserExerciseComponent } from './exercise/creation-user-exercise/creation-user-exercise.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { AuthGuard } from './_guards/auth.guard';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserEditResolver } from './_resolvers/user-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { CreationUserProductComponent } from './product/creation-user-product/creation-user-product.component';
import { DetailsUserProductsComponent } from './product/details-user-products/details-user-products.component';
import { DetailsUserExercisesComponent } from './exercise/details-user-exercises/details-user-exercises.component';
import { DetailsUserMealsComponent } from './meal/details-user-meals/details-user-meals.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

export const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent},
  { path: 'auth/login', component: LoginComponent},
  {
      path: '',
      runGuardsAndResolvers: 'always',
      canActivate: [AuthGuard],
      children: [
        { path: 'centre', component: UserDashboardComponent},
        { path: 'exercises', component: DetailsUserExercisesComponent},
        { path: 'exercises/new', component: CreationUserExerciseComponent},
        { path: 'meals', component: DetailsUserMealsComponent},
        { path: 'products', component: DetailsUserProductsComponent},
        { path: 'products/new', component: CreationUserProductComponent},
        { path: 'user/edit', component: UserEditComponent,
           resolve: {user: UserEditResolver}, canDeactivate: [PreventUnsavedChanges]},
      ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
