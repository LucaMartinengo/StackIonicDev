import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mda10Page } from './mda10.page';

describe('Mda10Page', () => {
  let component: Mda10Page;
  let fixture: ComponentFixture<Mda10Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mda10Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mda10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
