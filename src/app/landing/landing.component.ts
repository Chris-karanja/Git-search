import { Component, OnInit } from '@angular/core';
import { GitgetterService } from "../gitgetter.service"

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [GitgetterService]
})
export class LandingComponent {
  user: any;
  username: string;
  repos: any[];

  constructor(private githubService: GitgetterService) {}

  ngOnInit() {
    this.githubService.getUser().subscribe(res => {
      
      this.user = res;
      
    })

    this.githubService.getRepos().subscribe(res => {
      this.repos = res;
      
    })
  }

}