import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  color_footer: string
  
  constructor() {
    this.color_footer = `page-footer blue darken-2`
  }

  @Input() title = 'app';
}
