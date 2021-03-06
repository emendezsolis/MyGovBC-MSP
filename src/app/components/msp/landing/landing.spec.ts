import { TestBed } from '@angular/core/testing'
import { LandingComponent } from './landing.component'
import { Router, RouterModule } from '@angular/router';
import MspDataService from '../service/msp-data.service';
import { LocalStorageService, LOCAL_STORAGE_SERVICE_CONFIG } from 'angular-2-local-storage';

/*
describe('LandingComponent', () => {
  let localStorageServiceConfig = {
      prefix: 'ca.bc.gov.msp',
      storageType: 'localStorage'
  };
  
  beforeEach(() => {
    TestBed.configureTestingModule({ 
      declarations: [LandingComponent],
      imports:[RouterModule],
      providers: [MspDataService,
        LocalStorageService,{
            provide: LOCAL_STORAGE_SERVICE_CONFIG, useValue: localStorageServiceConfig
        }    
      ]
  })
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(LandingComponent)
    expect(fixture.componentInstance instanceof LandingComponent).toBe(true, 'should create LandingComponent')
    expect(fixture.componentInstance.lang('./en/index').pa).toContain('Apply')
  });
})
*/