import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Other3Page } from './other3.page';

describe('Other3Page', () => {
  let component: Other3Page;
  let fixture: ComponentFixture<Other3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Other3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Other3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
