import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalRickComponent } from './principal-rick.component';

describe('PrincipalRickComponent', () => {
  let component: PrincipalRickComponent;
  let fixture: ComponentFixture<PrincipalRickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalRickComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrincipalRickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
