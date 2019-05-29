import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GitgetterService {
  private username: string;
  private clientId = 'aa419b29ed745fe1a747';
  private clientSecret = '1d8f1706d58046fe5501d738a675c1b43314a057';

  url = 'http://api.github.com/users/';
  // private clientId = '<client_id>';
  // private clientSecret = '<client_secret>';
   constructor(private http: Http) {
    console.log('Github Service Running...!');
    this.username = 'amandeepmittal';
    console.log('Default Username: ' + this.username);
  }

  getUser() {
    if(this.username) {
      return this.http.get(this.url + this.username +  '?client_id=' + this.clientId  + '&client_secret=' + this.clientSecret)
        .map((res) => res.json());
    }
  }
 } 