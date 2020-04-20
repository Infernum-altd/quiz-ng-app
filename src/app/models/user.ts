import {DatePipe} from '@angular/common';
import {Gender} from '../registration/registration.component';

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  surname: string;
  gender: Gender;
  birthdate: Date;
  city: string;
  about: string;
  token?: string;
}
