import { Injectable } from '@angular/core';

export interface Clan {
  id: number;
  name: string;
  description: string;
  capacity: number;
  image?: string;
  members: number[];
}

@Injectable({ providedIn: 'root' })
export class ClanService {
  private clans: Clan[] = [
    { id: 1, name: 'Faze', description: 'FaZe Clan', capacity: 10, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Faze_Clan.svg/1920px-Faze_Clan.svg.png', members: [1,3] },
    { id: 2, name: 'Atlantis', description: 'Team Atlantis is a European team(Halien og)', capacity: 7, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMBVseCjVGRrzGVbqABv_TXg2RKbXc0xl7yg&s', members: [1,3] },
  ];

  getClans(): Clan[] {
    return [...this.clans];
  }

  getClanById(id: number): Clan | undefined {
    return this.clans.find(c => c.id === id);
  }

  addClan(defaultName?: string): Clan {
    const nextId = this.clans.length ? Math.max(...this.clans.map(c => c.id)) + 1 : 1;
    const newClan: Clan = {
      id: nextId,
      name: defaultName ?? `Clan${nextId}`,
      description: 'New clan',
      capacity: 10,
      image: 'https://static1.squarespace.com/static/5bf6c458c258b431922e9ec7/t/5c18e31b032be4e5c9e48215/1545134880643/CLAN+logo.png?format=1500w',
      members: []
    };
    this.clans.push(newClan);
    return newClan;
  }

  removeClan(id: number) {
    this.clans = this.clans.filter(c => c.id !== id);
  }

  addMember(clanId: number, playerId: number): boolean {
    const clan = this.getClanById(clanId);
    if (!clan) return false;
    if (clan.members.length >= clan.capacity) return false;
    if (!clan.members.includes(playerId)) clan.members.push(playerId);
    return true;
  }

  removeMember(clanId: number, playerId: number) {
    const clan = this.getClanById(clanId);
    if (!clan) return;
    clan.members = clan.members.filter(id => id !== playerId);
  }
}
