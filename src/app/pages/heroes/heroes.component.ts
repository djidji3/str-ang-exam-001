import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../../model/hero';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  szuroKifejezes : string = '';

  heroList$ : BehaviorSubject<Hero[]> = this.heroService.heroList$;

  constructor(private heroService: HeroService,) { }

  ngOnInit(): void {
    this.heroService.getAll();
  }

}
