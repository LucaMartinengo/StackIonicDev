import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mda11Page } from './mda11.page';

describe('Mda11Page', () => {
  let component: Mda11Page;
  let fixture: ComponentFixture<Mda11Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mda11Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mda11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
