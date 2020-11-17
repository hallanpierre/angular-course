import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .colorWhite {
      color: white;
    }
  `],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showParagraph = true;
  counter = 0;
  clicks = [];

  onClick() {
    this.showParagraph = !this.showParagraph;
    this.clicks.push(this.counter++);
  }

  getColor(numberClick: any) {
    return numberClick > 4 ? 'blue' : 'white';
  }
}
