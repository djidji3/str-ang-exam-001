import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroList: Hero[] = [
    {id: 1, name:"Superman", superPower: "fly", address: "Bp" },
    {id: 2, name:"Supergirl", superPower: "eat", address: "Szeged" },
    {id: 3, name:"SpiderMan", superPower: "run", address: "Zeg" },
    {id: 4, name:"It", superPower: "dig", address: "Bak" },
    {id: 5, name:"Lópici", superPower: "read", address: "Pest" },
    {id: 6, name:"Gáspár", superPower: "swap", address: "Buda" },
  ]

  heroList$ : BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>([]);
  constructor() { }

  getAll(): void{
    return  this.heroList$.next(this.heroList);
  }
}
