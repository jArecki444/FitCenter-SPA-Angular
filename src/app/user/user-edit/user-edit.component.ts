import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EditUser } from '../../_models/editUser';
import { AlertifyService } from '../../_services/alertify.service';
import { UserService } from '../../_services/user.service';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  editUserData: EditUser;

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }
  // Kod odpowiedzialny za wywołanie modala ostrzegajacego przed zamknieciem przegladarki

  constructor(private route: ActivatedRoute, private alertify: AlertifyService,
    private userService: UserService, private authService: AuthService) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.editUserData = data['user'].successResult;
    });
  }
  editUser() {
    this.userService.editUser(this.editUserData).subscribe(next => {
      this.alertify.success('Zmiany zostały zapisane!');
      this.editForm.reset(this.editUserData);
    }, error => {
      this.alertify.error(error);
    });
  }
}
