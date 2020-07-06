import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Other5Page } from './other5.page';

describe('Other5Page', () => {
  let component: Other5Page;
  let fixture: ComponentFixture<Other5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Other5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Other5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
