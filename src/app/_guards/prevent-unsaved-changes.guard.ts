import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { UserEditComponent } from '../user-edit/user-edit.component';


@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<UserEditComponent> {
    canDeactivate(component: UserEditComponent) {
        if (component.editForm.dirty) {
            return confirm('Czy napewno chcesz kontynuować?  Wszystkie niezapisane zmiany zostaną utracone!');
        }
        return true;
    }
}
