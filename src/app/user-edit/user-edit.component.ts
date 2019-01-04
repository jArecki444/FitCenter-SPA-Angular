import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditUser } from '../_models/editUser';
import { AlertifyService } from '../_services/alertify.service';
import { UserService } from '../_services/user.service';
import { AuthService } from '../_services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  editUserData: EditUser;

  constructor(private route: ActivatedRoute, private alertify: AlertifyService,
    private userService: UserService, private authService: AuthService) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.editUserData = data['user'];
    });
  }
  editUser() {
    console.log(this.editUserData);
    this.userService.editUser(this.authService.decodedToken.nameid, this.editUserData).subscribe(next => {
      this.alertify.success('Zmiany zostały zapisane!');
      this.editForm.reset(this.editUserData);
    }, error => {
      this.alertify.error(error);
    });
  }
}
