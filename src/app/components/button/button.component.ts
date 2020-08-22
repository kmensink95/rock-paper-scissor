import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() pick: string;
  constructor() { }

  ngOnInit(): void {
    console.log(this.pick)
  }

  getUrl(): string {
    return `../../assets/icons/${this.pick}.svg`;
  }

}
