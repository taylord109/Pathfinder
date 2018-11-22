import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterParserComponent } from './monster-parser.component';

describe('MonsterParserComponent', () => {
  let component: MonsterParserComponent;
  let fixture: ComponentFixture<MonsterParserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsterParserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
