import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  choice = '';
  choices = ['rock', 'paper', 'scissor'];
  AIchoice = '';
  score = 0;

  constructor(){}

  ngOnInit(): void {

  }

  getRandomChoice(): string {
    return this.choices[Math.floor(Math.random() * this.choices.length)];
  }

  choosen(choice: string): void {
    this.AIchoice = this.getRandomChoice();
    this.choice = choice;
    this.result();
  }

  result(): boolean {
    return false;
  }
}
