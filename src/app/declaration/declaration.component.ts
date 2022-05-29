import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.scss']
})
export class DeclarationComponent implements OnInit {

  
  url: string = "https://paula-declaration.vercel.app";
  urlSafe: SafeResourceUrl = '';

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
