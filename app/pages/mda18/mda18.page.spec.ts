import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mda18Page } from './mda18.page';

describe('Mda18Page', () => {
  let component: Mda18Page;
  let fixture: ComponentFixture<Mda18Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mda18Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mda18Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
