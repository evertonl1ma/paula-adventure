import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  url: string = "https://paula-adventure-game.vercel.app";
  urlSafe: SafeResourceUrl;
  
  constructor(public sanitizer: DomSanitizer) { 

    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);

  }

  ngOnInit(): void {
  }

}
