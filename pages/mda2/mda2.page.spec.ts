import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mda2Page } from './mda2.page';

describe('Mda2Page', () => {
  let component: Mda2Page;
  let fixture: ComponentFixture<Mda2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mda2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mda2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
