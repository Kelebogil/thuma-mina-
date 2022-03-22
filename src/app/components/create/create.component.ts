import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  number = new FormControl('');
  password =new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
