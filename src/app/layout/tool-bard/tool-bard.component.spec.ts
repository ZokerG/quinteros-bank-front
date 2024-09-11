import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolBardComponent } from './tool-bard.component';

describe('ToolBardComponent', () => {
  let component: ToolBardComponent;
  let fixture: ComponentFixture<ToolBardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolBardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolBardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
