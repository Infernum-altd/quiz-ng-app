import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../models/user';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {ProfileService} from '../../service/profileService/profile.service';
import {Router} from '@angular/router';
import {ShareIdService} from '../../service/profileService/share-id.service';
import {compareSegments} from '@angular/compiler-cli/ngcc/src/sourcemaps/segment_marker';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegistrationService} from '../../service/registrationService/registration.service';
import {AuthenticationService} from '../../service/loginService/authentication.service';
import {Role} from '../../models/role.enum';
import {Gender} from '../../models/gender.enum';
import {NotificationStatus} from '../../models/notification-status.enum';
import {MustMatch} from '../../registration/registration.component';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  adminUsers: User[];
  displayedColumns: string[] = ['name', 'role', 'active', 'actions'];
  dataSource: MatTableDataSource<User>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  public isCollapsed = true;
  registerForm: FormGroup;
  submitted = false;
  currentUserId: string;
  isAdmin = false;
  isSuperAdmin = false;
  roleUs: Role;

  model: User = {
    id: null,
    email: '',
    password: '',
    name: '',
    surname: '',
    gender: Gender[Symbol.hasInstance],
    birthdate: new Date(),
    city: '',
    about: '',
    image: '',
    role: Role[Symbol.hasInstance],
    notificationStatus: NotificationStatus[Symbol.hasInstance],
    countryId: null,
    rating: null
  };
  constructor(private profileService: ProfileService,
              private router: Router,
              private shareId: ShareIdService,
              public regService: RegistrationService,
              private formBuilder: FormBuilder) {
    this.currentUserId = JSON.parse(localStorage.getItem('currentUser')).id;
    this.roleUs = JSON.parse(localStorage.getItem('currentUser')).role;

    profileService.getAdminUsers().subscribe(resp => {
      this.adminUsers = resp;
      this.dataSource = new MatTableDataSource(this.adminUsers);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnInit(): void {
    this.adminCheck();
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      role: [''],
      password: ['', [Validators.required, Validators.minLength(8)]],   /// ("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    const input: User = JSON.parse(JSON.stringify(this.registerForm.value));
    this.model.email = input.email;
    this.model.password = input.password;
    this.model.role = input.role;
    this.addNewUser();
  }
  addNewUser(): void{
    console.log(this.model);
    this.regService.postRegisterInfo(this.model).subscribe(
      res => {
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate(['profile', this.currentUserId, {outlets: {profilenav: 'adminUsers'}}]);
        });
        alert('New user registrated');
      },
      error => {
        alert(error.error.message);
      }
    );
  }
  adminCheck(){
    if (this.roleUs.toString() === Role[Role.SUPER_ADMIN]){
      this.isSuperAdmin = true;
    }
    if (this.roleUs.toString() === Role[Role.ADMIN]){
      this.isAdmin = true;
    }
  }

  checkOut(id: string, email: string) {
    this.shareId.setEmail(email);
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['profile', id, {outlets: {profilenav: 'profinfo'}}]);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  deleteAdminUser(id) {
    this.profileService.deleteAdminUsers(id).subscribe(
      (resp: any) => {
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate(['profile', this.currentUserId, {outlets: {profilenav: 'adminUsers'}}]);
        });
      },
      error => {
        alert('Something wrong while deleting user');
      }
    );
  }
  updateActiveStatusUser(id) {
    this.profileService.updateActiveStatusUser(id).subscribe(
      (resp: any) => {
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate(['profile', this.currentUserId, {outlets: {profilenav: 'adminUsers'}}]);
        });
      },
      error => {
        alert('Something wrong while change active status');
      }
    );
  }
  get f() { return this.registerForm.controls; }
}
