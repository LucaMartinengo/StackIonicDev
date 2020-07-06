import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mda6Page } from './mda6.page';

describe('Mda6Page', () => {
  let component: Mda6Page;
  let fixture: ComponentFixture<Mda6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mda6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mda6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
