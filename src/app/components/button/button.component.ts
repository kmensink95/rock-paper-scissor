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
    console.log(this.pick)
  }

  choosen(pick: string): void {
    this.picked.emit(pick);
  }

  getUrl(): string {
    return `../../assets/icons/${this.pick}.svg`;
  }

}
