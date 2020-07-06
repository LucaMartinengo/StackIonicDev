import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mda7Page } from './mda7.page';

describe('Mda7Page', () => {
  let component: Mda7Page;
  let fixture: ComponentFixture<Mda7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mda7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mda7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
