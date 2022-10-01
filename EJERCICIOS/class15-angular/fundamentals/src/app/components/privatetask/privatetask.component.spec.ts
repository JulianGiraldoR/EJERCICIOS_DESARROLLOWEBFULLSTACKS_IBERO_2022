import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatetaskComponent } from './privatetask.component';

describe('PrivatetaskComponent', () => {
  let component: PrivatetaskComponent;
  let fixture: ComponentFixture<PrivatetaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivatetaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivatetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
