import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mda3Page } from './mda3.page';

describe('Mda3Page', () => {
  let component: Mda3Page;
  let fixture: ComponentFixture<Mda3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mda3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mda3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
