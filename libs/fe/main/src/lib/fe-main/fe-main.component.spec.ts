import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeMainComponent } from './fe-main.component';

describe('FeMainComponent', () => {
  let component: FeMainComponent;
  let fixture: ComponentFixture<FeMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeMainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
