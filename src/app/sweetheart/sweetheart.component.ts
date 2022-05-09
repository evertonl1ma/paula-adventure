import { AfterContentInit, AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sweetheart',
  templateUrl: './sweetheart.component.html',
  styleUrls: ['./sweetheart.component.scss']
})
export class SweetheartComponent implements OnInit, AfterViewInit, AfterContentInit {

  showLettersAnimated: boolean = false;
  counter: number = 0;
  @ViewChild('music')
  musicEl!: ElementRef;
  
  constructor() { }

  ngOnInit(): void {
    this.isShowContainer();
  }

  triggerOnEnded(event: any) {
    console.log('ended');
  }

  ngAfterViewInit(): void {
    this.musicEl.nativeElement.click()
    this.playMusic();
  }

  ngAfterContentInit(): void {
  //  this.playMusic();
  }

  isShowContainer() {
    const timer = setInterval(() => {
      this.counter++;
      if(this.counter >= 15) {
        this.showLettersAnimated = true;
        clearInterval(timer)
      }
    }, 1000);

  }

  playMusic() {
    setTimeout(() => {
      this.musicEl.nativeElement.click()
    }, 500);
      let a = new Audio('../../assets/music/do-i-wanna-know.ogg');
      a.load();
      a.play();

  }


  @HostListener("window:load", [])
  onWindowScroll() {
    this.playMusic();
  }
}
