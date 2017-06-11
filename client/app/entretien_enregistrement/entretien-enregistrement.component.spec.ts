import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntretienEnregistrementComponent } from './entretien-enregistrement.component';

describe('EntretienEnregistrementComponent', () => {
  let component: EntretienEnregistrementComponent;
  let fixture: ComponentFixture<EntretienEnregistrementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntretienEnregistrementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntretienEnregistrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
