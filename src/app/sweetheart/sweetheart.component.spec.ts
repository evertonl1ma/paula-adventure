import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetheartComponent } from './sweetheart.component';

describe('SweetheartComponent', () => {
  let component: SweetheartComponent;
  let fixture: ComponentFixture<SweetheartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SweetheartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetheartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
