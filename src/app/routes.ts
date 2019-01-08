import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { CreationUserExerciseComponent } from './exercise/creation-user-exercise/creation-user-exercise.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { AuthGuard } from './_guards/auth.guard';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserEditResolver } from './_resolvers/user-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { CreationUserProductComponent } from './meal/creation-user-product/creation-user-product.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
      path: '',
      runGuardsAndResolvers: 'always',
      canActivate: [AuthGuard],
      children: [
        { path: 'centre', component: UserDashboardComponent},
        { path: 'exercises', component: CreationUserExerciseComponent},
        { path: 'meals', component: CreationUserProductComponent},
        { path: 'user/edit', component: UserEditComponent,
           resolve: {user: UserEditResolver}, canDeactivate: [PreventUnsavedChanges]},
      ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
