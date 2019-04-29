import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1,'pass','Your will is more important than your skill', new Date(2018,3,14) ),
    new Quote(2,'Bernice','Be better in life than in social media', new Date(2018,3,14)),
    new Quote(3, 'Spongebob','You will never know the value of moment until it becomes a memory' ,new Date(2018,3,14)),
    new Quote(4, 'Shyla','never quit code' , new Date(2018,3,14)),
  ]
Quote(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription ;
}
    deleteQuote(isComplete,index){
       if (isComplete){
           let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

           if(toDelete){
               this.quotes.splice(index,1)
           }
       }
   }
   addNewQuote(quote){
    let QuoteLength = this.Quote.length;
    quote.id=QuoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)

}
  constructor() { }
  ngOnInit() {
  }
}

