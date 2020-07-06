import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mda8Page } from './mda8.page';

describe('Mda8Page', () => {
  let component: Mda8Page;
  let fixture: ComponentFixture<Mda8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mda8Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mda8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
