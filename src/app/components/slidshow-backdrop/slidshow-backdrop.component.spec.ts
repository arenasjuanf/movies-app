import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlidshowBackdropComponent } from './slidshow-backdrop.component';

describe('SlidshowBackdropComponent', () => {
  let component: SlidshowBackdropComponent;
  let fixture: ComponentFixture<SlidshowBackdropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidshowBackdropComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlidshowBackdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
