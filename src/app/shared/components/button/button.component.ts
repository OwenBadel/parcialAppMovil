import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: false
})
export class ButtonComponent  implements OnInit {

  @Input() ClickHere: string = '';
  @Input() shape: 'round' | 'square' | ''= '';
  @Input() expand: 'full' | 'block' | 'outline' | ''= '';
  @Input() fill: 'solid' | 'clear' | 'outline' | ''= '';
  constructor() { }

  ngOnInit() {}

}
