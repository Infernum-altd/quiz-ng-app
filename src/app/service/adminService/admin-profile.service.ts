import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AdminProfileService {
  private BASE_URL = window['configureApiBaseUrl'];
}
