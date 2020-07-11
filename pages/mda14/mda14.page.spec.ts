import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mda14Page } from './mda14.page';

describe('Mda14Page', () => {
  let component: Mda14Page;
  let fixture: ComponentFixture<Mda14Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mda14Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mda14Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
