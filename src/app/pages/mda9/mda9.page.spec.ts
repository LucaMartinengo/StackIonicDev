import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mda9Page } from './mda9.page';

describe('Mda9Page', () => {
  let component: Mda9Page;
  let fixture: ComponentFixture<Mda9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mda9Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mda9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
