import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mda16Page } from './mda16.page';

describe('Mda16Page', () => {
  let component: Mda16Page;
  let fixture: ComponentFixture<Mda16Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mda16Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mda16Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
