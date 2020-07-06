import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mda15Page } from './mda15.page';

describe('Mda15Page', () => {
  let component: Mda15Page;
  let fixture: ComponentFixture<Mda15Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mda15Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mda15Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
