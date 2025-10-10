import { Injectable, signal } from '@angular/core';
import { Quest } from './quests-item';

@Injectable({
  providedIn: 'root'
})
export class QuestsService {
  quests = signal<Quest[]>([
    { id: 1, title: 'legendary scar', description: 'Retrieve the legendary scar', xp: 40 },
    { id: 2, title: 'Rescue the money', description: 'Save the money captured by bad people.', xp: 120 },
    { id: 3, title: 'Collector', description: 'Gather 10 people for.', xp: 60 }
  ]);

  constructor() {
    console.log('Service instance created.');
  }

  getQuests() {
    return this.quests;
  }

  addQuest() {
    const maxId = this.quests().reduce((max, q) => Math.max(max, q.id), 0);
    const newQuest: Quest = {
      id: maxId + 1,
      title: `New quest #${maxId + 1}`,
      description: 'This is a newly added quest.',
      xp: 75
    };
    this.quests.set([...this.quests(), newQuest]);
  }

  deleteQuest(id: number) {
    this.quests.set(this.quests().filter(q => q.id !== id));
  }
}
