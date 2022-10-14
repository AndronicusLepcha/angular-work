import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentExamComponent } from './component-exam.component';

describe('ComponentExamComponent', () => {
  let component: ComponentExamComponent;
  let fixture: ComponentFixture<ComponentExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentExamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
