import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Intro5Page } from './intro5.page';

describe('Intro5Page', () => {
  let component: Intro5Page;
  let fixture: ComponentFixture<Intro5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Intro5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Intro5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
