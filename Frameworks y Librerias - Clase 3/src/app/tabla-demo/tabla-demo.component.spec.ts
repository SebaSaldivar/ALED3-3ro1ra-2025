import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDemoComponent } from './tabla-demo.component';

describe('TablaDemoComponent', () => {
  let component: TablaDemoComponent;
  let fixture: ComponentFixture<TablaDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
