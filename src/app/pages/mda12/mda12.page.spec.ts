import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mda12Page } from './mda12.page';

describe('Mda12Page', () => {
  let component: Mda12Page;
  let fixture: ComponentFixture<Mda12Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mda12Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mda12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
