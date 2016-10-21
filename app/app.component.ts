import { Component } from '@angular/core';

import { Hero } from './hero';

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice', sex: 'M' },
  { id: 12, name: 'Narco', sex: 'M' },
  { id: 13, name: 'Bombasto', sex: 'M' },
  { id: 14, name: 'Celeritas', sex: 'F' },
  { id: 15, name: 'Magneta', sex: 'F' },
  { id: 16, name: 'RubberMan', sex: 'M' },
  { id: 17, name: 'Dynama', sex: 'F' },
  { id: 18, name: 'Dr IQ', sex: 'M' },
  { id: 19, name: 'Magma', sex: 'F' },
  { id: 20, name: 'Tornado', sex: 'M' },
  { id: 40, name: 'Bennett', sex: 'M' }
];

@Component({
    selector: 'my-app',
    template: `
    <h1>Angular2 App {{title}}</h1>
        <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}, {{hero.sex}}
      </li>
    </ul>
    
    `
    styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: pink;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})

export class AppComponent {
  title = 'Multiple Components';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
