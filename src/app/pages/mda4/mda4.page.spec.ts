import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mda4Page } from './mda4.page';

describe('Mda4Page', () => {
  let component: Mda4Page;
  let fixture: ComponentFixture<Mda4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mda4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mda4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
