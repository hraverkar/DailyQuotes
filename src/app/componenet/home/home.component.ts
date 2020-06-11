import { Quotes } from './../../interface/quotes';
import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private dataService: DataService) {}
  public quotes: Quotes;

  ngOnInit(): void {}

  getQuotes() {
    this.dataService.getQuotesForDay().subscribe((res: Quotes) => {
      this.quotes = res;
    });
  }
}
