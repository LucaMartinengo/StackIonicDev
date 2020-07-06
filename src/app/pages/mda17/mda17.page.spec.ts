import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mda17Page } from './mda17.page';

describe('Mda17Page', () => {
  let component: Mda17Page;
  let fixture: ComponentFixture<Mda17Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mda17Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mda17Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
