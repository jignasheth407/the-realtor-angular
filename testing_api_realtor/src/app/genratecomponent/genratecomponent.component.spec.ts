import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenratecomponentComponent } from './genratecomponent.component';

describe('GenratecomponentComponent', () => {
  let component: GenratecomponentComponent;
  let fixture: ComponentFixture<GenratecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenratecomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenratecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
