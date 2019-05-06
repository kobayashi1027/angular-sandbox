import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angularサンプルページ';

  public onClick(event: any) {
    alert('ボタンがクリックされました');
  }
}
