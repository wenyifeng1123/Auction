import {CanActivate} from '@angular/router';
/**
 * Created by lenovo-pc on 2018/2/18.
 */
export class LoginGuard implements CanActivate {
  canActivate() {
    let loggedIn: boolean = Math.random() < 0.1;
    if (!loggedIn) {
      console.log('The user should login');
    }
    return undefined;
  }
}
