import { Component, OnInit } from '@angular/core';
import { GitgetterService } from "./gitgetter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: any;
  username: string;

  ngOnInit() {
  }

} 