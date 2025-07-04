import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBlogComponent } from './navbar-blog.component';

describe('NavbarBlogComponent', () => {
  let component: NavbarBlogComponent;
  let fixture: ComponentFixture<NavbarBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
