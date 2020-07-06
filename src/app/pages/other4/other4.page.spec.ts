import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Other4Page } from './other4.page';

describe('Other4Page', () => {
  let component: Other4Page;
  let fixture: ComponentFixture<Other4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Other4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Other4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
