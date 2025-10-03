import { Component, signal } from '@angular/core';
import { QuestItem, Quest } from './quests-item';

@Component({
  selector: 'app-quests',
  standalone: true,
  imports: [QuestItem],
  templateUrl: './quests.html',
  styleUrls: ['./quests.css']
})
export class Quests {
  quests = signal<Quest[]>([
       { id: 1, title: 'NIgger HAIL', description: 'Retrieve the legendary Kanye from the Naci-s anus.', xp: 40 },
    { id: 2, title: 'Rescue the niggers', description: 'Save the niggers captured by jews.', xp: 120 },
    { id: 3, title: 'Nigger Collector', description: 'Gather 10 niggers for the village nigger.', xp: 60 }
  ]);

  addQuest() {
    const maxId = this.quests().reduce((max, q) => Math.max(max, q.id), 0);
    const newQuest: Quest = {
      id: maxId + 1,
      title: `New Nigger #${maxId + 1}`,
      description: 'This is a newly added nigger.',
      xp: 75
    };
    this.quests.set([...this.quests(), newQuest]);
  }

  deleteQuest = (id: number) => {
    this.quests.set(this.quests().filter(q => q.id !== id));
  }
}
