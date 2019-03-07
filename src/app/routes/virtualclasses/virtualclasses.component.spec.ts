import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualclassesComponent } from './virtualclasses.component';

describe('VirtualclassesComponent', () => {
  let component: VirtualclassesComponent;
  let fixture: ComponentFixture<VirtualclassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualclassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
