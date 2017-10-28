import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent implements OnInit {

  color_toolbar: string

  constructor() {
    this.color_toolbar = `blue darken-2`
  }

  ngOnInit() {
  }

}
