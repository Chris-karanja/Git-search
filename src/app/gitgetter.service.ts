import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class GitgetterService {
  private username: string;
  private clientId = 'aa419b29ed745fe1a747';
  private clientSecret = '1d8f1706d58046fe5501d738a675c1b43314a057';
  

  url = 'http://api.github.com/users/';

  constructor(private http: Http) {
   
    this.username = 'Chris-karanja';
  }

  private handleError(error: any) {
    if (error.status === 401) {
     return Observable.throw(error.status);
   } else {
     return Observable.throw(error.status || 'Server error');
   }
 }	  


  getUser() {
    if(this.username) {
      return this.http.get(this.url + this.username +  '?client_id=' + this.clientId  + '&client_secret=' + this.clientSecret)
        .map((res) => res.json())
        .catch(this.handleError); 
    }
  }

  getRepos() {
    if(this.username) {
      return this.http.get(this.url + this.username + '/repos?client_id=' + this.clientId + '&client_secret=' + this.clientSecret)
        .map((res) => res.json())
        .catch(this.handleError);
    }	
  }

   updateUser(username: string) {
    this.username = username;
  }
 } 
 