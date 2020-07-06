import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mda5Page } from './mda5.page';

describe('Mda5Page', () => {
  let component: Mda5Page;
  let fixture: ComponentFixture<Mda5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mda5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mda5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
