import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cat memetizer';

  catUrl: string;
  catSentence: string;
  loading: boolean = false;

  constructor (private http:HttpClient) {}

  onCatReception(sentence: string) {
    this.catSentence = sentence;
    this.fetchImage();
  }

  private fetchImage() {
    this.loading = true;
    this.http
    .get('https://api.thecatapi.com/v1/images/search')
    .subscribe(response => {
      this.catUrl = response[0].url;
      this.loading = false;
    });
  }
}
