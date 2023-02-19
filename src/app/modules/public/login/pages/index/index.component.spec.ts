import { ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { IndexComponent } from './index.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexComponent ],
      imports: [ BrowserAnimationsModule, RouterTestingModule, RouterTestingModule  ],
      providers: [LoginService]
    })
    .compileComponents();
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form', () => {
    component.ngOnInit();
    expect( component.loginForm.get('email') ).toBeTruthy()
    expect( component.loginForm.get('password') ).toBeTruthy()
  });

  it('should correct login', (done) => {
    component.ngOnInit();
    expect( component.loginForm.get('email') ).toBeTruthy()
    expect( component.loginForm.get('password') ).toBeTruthy()
    component.loginForm.get('email')?.setValue('annicorobles@gmail.com');
    component.loginForm.get('password')?.setValue('a12345');
    component.login();
    expect( component.isFormError ).toBeTruthy();
    component.loginForm.get('email')?.setValue('user@quipux.com');
    component.loginForm.get('password')?.setValue('12345');
    component.login();
    fixture.detectChanges();
    expect( component.isFormError ).toBeFalsy();
    fixture.whenStable().then(() => {
      expect(router.url).toBe('/about');
    });
    done();
  });
});
