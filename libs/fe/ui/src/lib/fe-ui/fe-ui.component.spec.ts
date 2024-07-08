import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeUiComponent } from './fe-ui.component';

describe('FeUiComponent', () => {
  let component: FeUiComponent;
  let fixture: ComponentFixture<FeUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
