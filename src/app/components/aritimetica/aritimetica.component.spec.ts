import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AritimeticaComponent } from './aritimetica.component';

describe('AritimeticaComponent', () => {
  let component: AritimeticaComponent;
  let fixture: ComponentFixture<AritimeticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AritimeticaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AritimeticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
