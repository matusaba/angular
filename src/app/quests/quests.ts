import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestItem } from './quests-item';
import { QuestsService } from './quests.service';

@Component({
  selector: 'app-quests',
  standalone: true,
  imports: [QuestItem],
  templateUrl: './quests.html',
  styleUrls: ['./quests.css']
})
export class Quests implements OnInit, OnDestroy {
  quests = this.questsService.getQuests();

  constructor(private questsService: QuestsService) {}

  ngOnInit() {
    console.log('Quests component initialized.');
  }

  ngOnDestroy() {
    console.log('Quests component destroyed.');
  }

  addQuest() {
    this.questsService.addQuest();
  }

  deleteQuest(id: number) {
    this.questsService.deleteQuest(id);
  }
}
