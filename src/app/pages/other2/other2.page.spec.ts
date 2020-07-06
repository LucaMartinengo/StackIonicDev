import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Other2Page } from './other2.page';

describe('Other2Page', () => {
  let component: Other2Page;
  let fixture: ComponentFixture<Other2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Other2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Other2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
