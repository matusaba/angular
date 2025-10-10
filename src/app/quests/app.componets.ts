import { Component } from '@angular/core';
import { Quests } from './quests';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Quests],
  templateUrl: './app.component.html'
})
export class AppComponent {
  showQuests = true;

  toggleQuests() {
    this.showQuests = !this.showQuests;
  }
}
