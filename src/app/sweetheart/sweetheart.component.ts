import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sweetheart',
  templateUrl: './sweetheart.component.html',
  styleUrls: ['./sweetheart.component.scss']
})
export class SweetheartComponent implements OnInit {

  showLettersAnimated: boolean = false;
  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.isShowContainer();
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
}
