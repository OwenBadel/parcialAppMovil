import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Country } from 'src/app/interfaces/country';



@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
   standalone: false
})
export class SelectComponent  implements OnInit {

  @Input() list: string[] = [];
  @Input() label: string = '';
  @Input() placeholder: string = '';
    @Input() controller: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {}

}
