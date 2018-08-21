import { Component, ViewContainerRef, OnInit  } from '@angular/core';
import { ToastsManager } from 'ng6-toastr/ng2-toastr';
import { AppState } from './app.state';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { User, RegUser } from './models/user.model';
import { CurrentUser }  from './actions/user.actions';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef, public userService: UserService, private store: Store<AppState>) {
         this.toastr.setRootViewContainerRef(vcr);
      }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('displayUser'))) {
      this.store.dispatch(new CurrentUser(JSON.parse(localStorage.getItem('displayUser'))));
    }
  }
}
