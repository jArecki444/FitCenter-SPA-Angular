import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './_services/auth.service';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { appRoutes } from './routes';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { CreationUserExerciseComponent } from './exercise/creation-user-exercise/creation-user-exercise.component';
import { AuthGuard } from './_guards/auth.guard';
import { ExercisesService } from './_services/exercises.service';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserEditResolver } from './_resolvers/user-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { CreationUserProductComponent } from './product/creation-user-product/creation-user-product.component';
import { DetailsUserProductsComponent } from './product/details-user-products/details-user-products.component';
import { DetailsUserExercisesComponent } from './exercise/details-user-exercises/details-user-exercises.component';
import { DetailsUserMealsComponent } from './meal/details-user-meals/details-user-meals.component';
import { UserMealsTableComponent } from './meal/user-meals-table/user-meals-table.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule} from '@angular/flex-layout';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegisterComponent,
    HomeComponent,
    UserDashboardComponent,
    CreationUserExerciseComponent,
    CreationUserProductComponent,
    UserEditComponent,
    DetailsUserProductsComponent,
    DetailsUserExercisesComponent,
    DetailsUserMealsComponent,
    UserMealsTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: ['localhost:5000/api/auth']
      }
    }),
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [AuthService, ExercisesService, ErrorInterceptorProvider, AlertifyService, AuthGuard, UserEditResolver, PreventUnsavedChanges],
  bootstrap: [AppComponent]
})
export class AppModule {}
