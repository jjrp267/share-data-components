import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Input() name: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
