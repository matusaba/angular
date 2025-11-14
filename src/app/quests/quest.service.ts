import { Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Quest {
  id: number;
  title: string;
  description: string;
  xp: number;
  image?: string;
  playerId?: number;
}

@Injectable({ providedIn: 'root' })
export class QuestService {
  private quests: Quest[] = [
    { id: 1, title: 'workout', description: 'train for 3 hours', xp: 90, image: 'assets/my-header.jpg', playerId: 1 },
    { id: 2, title: 'learn', description: 'learn something new', xp: 30, image: 'assets/my-header.jpg', playerId: 2 },
    { id: 3, title: 'sleep', description: 'sleep for 8 hours', xp: 120, image: 'assets/my-header.jpg', playerId: 1 }
  ];

  getQuests(): Quest[] {
    return [...this.quests];
  }

  getQuestById(id: number): Quest | undefined {
    return this.quests.find(q => q.id === id);
  }

  getQuestsByPlayer(playerId: number): Quest[] {
    return this.quests.filter(q => q.playerId === playerId);
  }

  addQuestForPlayer(playerId?: number) {
    const nextId = this.quests.length ? Math.max(...this.quests.map(q => q.id)) + 1 : 1;
    this.quests.push({
      id: nextId,
      title: 'New Quest',
      description: 'Generated quest',
      xp: 60,
      image: 'assets/my-header.jpg',
      playerId
    });
  }

  addQuest() {
    this.addQuestForPlayer(undefined);
  }

  removeQuest(id: number) {
    this.quests = this.quests.filter(q => q.id !== id);
  }

  assignQuestToPlayer(questId: number, playerId: number) {
    const q = this.getQuestById(questId);
    if (q) q.playerId = playerId;
  }
}