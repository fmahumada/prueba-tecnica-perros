import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDogsComponent } from './get-dogs.component';

describe('GetDogsComponent', () => {
  let component: GetDogsComponent;
  let fixture: ComponentFixture<GetDogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetDogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
