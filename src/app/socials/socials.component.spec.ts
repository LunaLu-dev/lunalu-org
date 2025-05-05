import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialsComponent } from './socials.component';

describe('SocialsComponent', () => {
  let component: SocialsComponent;
  let fixture: ComponentFixture<SocialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // @ts-ignore
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
