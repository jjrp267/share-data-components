import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { Child2Component } from '../child2/child2.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements AfterViewInit {

  name = 'Angular';
  @ViewChild(Child2Component, {static: false}) hello: Child2Component | undefined;
  @ViewChild('pRef', {static: false}) pRef: ElementRef | undefined;

  constructor() { }

  ngAfterViewInit() {
    console.log('en el after');
    console.log('Hello ', this.hello!.name);
    this.pRef!.nativeElement.innerHTML = "DOM updated succesfully!!!";
  }

}
