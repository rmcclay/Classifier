import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocSubComponent } from './doc-sub.component';

describe('DocSubComponent', () => {
  let component: DocSubComponent;
  let fixture: ComponentFixture<DocSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
