import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Other1Page } from './other1.page';

describe('Other1Page', () => {
  let component: Other1Page;
  let fixture: ComponentFixture<Other1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Other1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Other1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
