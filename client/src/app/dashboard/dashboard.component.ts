import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  initials
  username = localStorage.getItem('username')

  ngOnInit() {
    this.initials = this.username.charAt(0)
  }

}
