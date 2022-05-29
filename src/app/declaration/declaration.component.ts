import { AfterViewInit, Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.scss']
})
export class DeclarationComponent implements OnInit, AfterViewInit{

  @ViewChild('music')
  musicEl!: ElementRef;
  
  music: any = new Audio('../../assets/music/metallica-nothing-else-matters.m4a');
  
  url: string = "https://paula-declaration.vercel.app";
  urlSafe: SafeResourceUrl = '';

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  ngAfterViewInit(): void {
    this.musicEl.nativeElement.click()
    this.playMusic();
  }

  playMusic() {
    setTimeout(() => {
    //  this.musicEl.nativeElement.click()
    }, 500);
      
      this.music.load();
      this.music.play();
      this.music.volume = 0.3;

  }
}


