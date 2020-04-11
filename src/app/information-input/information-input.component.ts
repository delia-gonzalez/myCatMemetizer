import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-information-input',
  templateUrl: './information-input.component.html',
  styleUrls: ['./information-input.component.scss']
})
export class InformationInputComponent implements OnInit {

  mySentence = '';

  @Output() catSentence = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onCatPicked() {
     this.catSentence.emit(this.mySentence);
  }

}
