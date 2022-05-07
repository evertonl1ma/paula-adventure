import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  @Output() nextStep: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  jumpIntro() {
    this.nextStep.emit(true)
  }
}
