import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Menu3Page } from './menu3.page';

describe('Menu3Page', () => {
  let component: Menu3Page;
  let fixture: ComponentFixture<Menu3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Menu3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
