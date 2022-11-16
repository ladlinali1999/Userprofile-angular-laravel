import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FielddataComponent } from './fielddata.component';

describe('FielddataComponent', () => {
  let component: FielddataComponent;
  let fixture: ComponentFixture<FielddataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FielddataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FielddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
