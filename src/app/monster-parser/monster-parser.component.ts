import { Component, OnInit, ViewChild, OnChanges, ElementRef } from '@angular/core';
import { clipboard } from 'electron';

@Component({
  selector: 'pf-monster-parser',
  templateUrl: './monster-parser.component.html',
  styleUrls: ['./monster-parser.component.sass']
})
export class MonsterParserComponent implements OnInit, OnChanges {

  @ViewChild('inputArea') monsterInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    console.log(changes);
  }

  public Hello() {
    const monster: string = this.monsterInput.nativeElement.value;
    // let d = new Fuse()

    console.log(monster);
  }
  public de(){
    clipboard.readText('selection');
  }

}
