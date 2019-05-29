import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Git';

  constructor(private http: Http){}

  userName = '';
  searchUser() {
    this.http.get('https://api.github.com/users' + this.userName)
  }
}
