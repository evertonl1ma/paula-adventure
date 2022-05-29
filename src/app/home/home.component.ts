import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  timer: number = 0;

  showGame: boolean = false;

  url: string = "https://paula-adventure-game.vercel.app";
  urlSafe: SafeResourceUrl;
  
  constructor(public sanitizer: DomSanitizer) { 

    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);

  }

  ngOnInit(): void {
    this.setTimer()
  }

  setTimer() {
    const count = setInterval(() => {
      this.timer++
      if(this.timer >= 40) {
        clearInterval(count)
        this.showGame = true;
      }
    }, 1000)


  }

  
  jumpIntro(event: Event) {
    this.showGame = true;
  }
}
