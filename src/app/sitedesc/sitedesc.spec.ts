import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sitedesc } from './sitedesc';

describe('Sitedesc', () => {
  let component: Sitedesc;
  let fixture: ComponentFixture<Sitedesc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sitedesc],
    }).compileComponents();

    fixture = TestBed.createComponent(Sitedesc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
