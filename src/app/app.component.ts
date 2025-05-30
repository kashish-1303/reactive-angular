import {Component, OnInit} from '@angular/core';
import { LoadingService } from './loading/loading.service';
import { AuthStore } from './services/auth.store';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false,
    providers:[ LoadingService
    ]
})
export class AppComponent implements  OnInit {

    constructor(public auth: AuthStore) {

    }

    ngOnInit() {


    }

  logout() {
    this.auth.logout();

  }

}
