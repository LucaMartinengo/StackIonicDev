import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mda1Page } from './mda1.page';

describe('Mda1Page', () => {
  let component: Mda1Page;
  let fixture: ComponentFixture<Mda1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mda1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mda1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
