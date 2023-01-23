import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {

  message:string | undefined;
  subscription: Subscription | undefined;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
  }

  ngOnDestroy() {
    this.subscription!.unsubscribe();
  }

  newMessage() {
    this.data.changeMessage("Hello from Sibling")
  }

}
