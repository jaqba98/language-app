import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FePageComponent } from './fe-page.component';

describe('FePageComponent', () => {
  let component: FePageComponent;
  let fixture: ComponentFixture<FePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
