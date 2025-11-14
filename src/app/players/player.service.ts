import { Injectable } from '@angular/core';

export interface Player {
  id: number;
  nickname: string;
  level: number;
  clanId?: number;
  image?: string;
}

@Injectable({ providedIn: 'root' })
export class PlayerService {
  private players: Player[] = [
    { id: 1, nickname: 'Halien', level: 2, clanId: 2, image: 'https://refstatic.sk/article/83972aa6f495a359f56f.jpg?is=1200x2000&s=8dea28e40bd9ae6332c6ccc67febf628ab74b2c1b89e2155fcad1c7ef204486c' },
    { id: 2, nickname: 'bigga', level: 4, clanId: undefined, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5KDIFXPuYse5eyHh7zTTWwYXcIKFpmX9jUg&s' },
    { id: 3, nickname: 'ye', level: 6, clanId: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVk9ZFlYXrlHFBVMEAScKUJGwbM9J4nRt3HA&s' }
  ];

  getPlayers(): Player[] {
    return [...this.players];
  }

  getPlayerById(id: number): Player | undefined {
    return this.players.find(p => p.id === id);
  }

  addPlayer(defaultNickname?: string): Player {
    const nextId = this.players.length ? Math.max(...this.players.map(p => p.id)) + 1 : 1;
    const newPlayer: Player = {
      id: nextId,
      nickname: defaultNickname ?? `Player${nextId}`,
      level: 1,
      clanId: undefined,
      image: 'https://lh6.googleusercontent.com/4dI70cVld9RevU2yMxtQGOMHbjvcgggCCNNYc_SGvaQFjXO8kBUugs7ysKDWnekPBffu0ptQ-KieFIzqR1D_36CouuGK5GEVfZ-AyjxmSvfmeaqxv9hKIOvkXj9S6D5LuLNrzsomZ_Nvz0SfCFexmz2IE6Je-tWjJtF_poxxOVvoA4OrYsTREby8n2NgXw',
    };
    this.players.push(newPlayer);
    return newPlayer;
  }

  removePlayer(id: number) {
    this.players = this.players.filter(p => p.id !== id);
  }

  setClan(playerId: number, clanId?: number) {
    const p = this.getPlayerById(playerId);
    if (p) p.clanId = clanId;
  }

  getPlayersNotInClan(clanId?: number): Player[] {
    return this.players.filter(p => p.clanId !== clanId);
  }
}