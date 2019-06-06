import { Component, OnInit } from '@angular/core';
import { GitgetterService } from "../gitgetter.service"

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  username: string;

  constructor(private gitgetterService: GitgetterService) {
    this.gitgetterService.getUser().subscribe(
      (user) => {
        this.user = user;
      }
    );
   }
   ngOnInit() {
  }
  
}
