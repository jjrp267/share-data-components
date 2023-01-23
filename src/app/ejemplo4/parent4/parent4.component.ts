import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-parent4',
  templateUrl: './parent4.component.html',
  styleUrls: ['./parent4.component.css']
})
export class Parent4Component implements OnInit {

  message:string | undefined;
  subscription: Subscription | undefined;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
  }

  newMessage() {
    this.data.changeMessage("Hello from parent")
  }

}
