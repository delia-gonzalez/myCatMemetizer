import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-image-generator',
  templateUrl: './image-generator.component.html',
  styleUrls: ['./image-generator.component.scss'],
})
export class ImageGeneratorComponent implements OnInit {
  @Input() catUrl: string
  @Input() catSentence: string
  @Input() loading: string

  constructor() {}

  ngOnInit(): void {
    console.log('loading', this.loading)
  }
}
