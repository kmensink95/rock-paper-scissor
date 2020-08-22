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
  win: boolean;

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

  result(): void {
    switch (this.choice) {
      case 'paper':
        if (this.AIchoice === 'scissor') {
          this.win = false;
        }
        if (this.AIchoice === 'rock') {
          this.score++;
          this.win = true;
        }
        if (this.AIchoice === this.choice) {
          this.win = false;
        }
      break;
      case 'rock':
        if (this.AIchoice === 'scissor') {
          this.score++;
          this.win = true;
        }
        if (this.AIchoice === 'paper') {
          this.win = false;
        }
        if (this.AIchoice === this.choice) {
          this.win = false;
        }
      break;
      case 'scissor':
        if (this.AIchoice === 'paper') {
          this.score++;
          this.win = true;
        }
        if (this.AIchoice === 'rock') {
          this.win =  false;
        }
        if (this.AIchoice === this.choice) {
          this.win =  false;
        }
      break;
    }
  }
}
