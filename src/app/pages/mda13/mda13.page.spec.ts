import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mda13Page } from './mda13.page';

describe('Mda13Page', () => {
  let component: Mda13Page;
  let fixture: ComponentFixture<Mda13Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mda13Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mda13Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
