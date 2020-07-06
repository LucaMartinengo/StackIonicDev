import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Other6Page } from './other6.page';

describe('Other6Page', () => {
  let component: Other6Page;
  let fixture: ComponentFixture<Other6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Other6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Other6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
