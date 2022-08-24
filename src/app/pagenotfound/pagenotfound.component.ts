import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {
  videourl = "assets/pagenotfound.mp4"
  constructor() { }

  ngOnInit(): void {
    this.videourl = "assets/pagenotfound.mp4"
  }

}
