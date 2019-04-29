import { Component } from '@angular/core';
import {Quote}  from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  quotes = [
    new Quote(1,'pintrest','Your will is more important than your skill' ,new Date(2016,3,26)),
    new Quote(2,'Bernice','Be better in life than in social media' ,new Date(2017,3,14)),
    new Quote(3, 'Spongebob','You will never know the value of moment until it becomes a memory',new Date(2007,12,14)),
    new Quote(4, 'Shyla','never quit code',new Date(2008,3,24)),
  ]

}
