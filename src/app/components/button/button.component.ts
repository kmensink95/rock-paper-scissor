import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() pick: string;
  @Output()  picked: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  choosen(pick: string): void {
    this.picked.emit(pick);
  }

  getColor(): string {
    switch(this.pick) {
      case 'paper':
        return 'button button--blue';
        break;
      case 'scissor':
        return 'button button--red';
        break;
      case 'rock':
        return 'button';
        break;
    }
  }

  getUrl(): string {
    return `../../assets/icons/${this.pick}.svg`;
  }

}
