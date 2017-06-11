import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageEnregistrementComponent } from './stage-enregistrement.component';

describe('StageEnregistrementComponent', () => {
  let component: StageEnregistrementComponent;
  let fixture: ComponentFixture<StageEnregistrementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StageEnregistrementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageEnregistrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
