import {NgModule, Injectable} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser'

import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import { AlertModule } from 'ng2-bootstrap/components/alert';
import { ProgressbarModule } from 'ng2-bootstrap/components/progressbar';
import { ModalModule } from 'ng2-bootstrap/components/modal';
import { Ng2CompleterModule } from "ng2-completer";

import {MspComponent} from './msp.component';
import {LandingComponent} from './landing/landing.component';
import {MspNameComponent} from './common/name/name.component';
import {MspBirthDateComponent} from './common/birthdate/birthdate.component';
import {MspAddressComponent} from './common/address/address.component';
import {MspProvinceComponent} from './common/province/province.component';
import {MspPhoneComponent} from './common/phone/phone.component';
import {MspProgressBarComponent} from './common/progressBar/progressBar.component';
import {MspPhnComponent} from './common/phn/phn.component';
import {HealthNumberComponent} from './common/health-number/health-number.component';
import {MspArrivalDateComponent} from './common/arrival-date/arrival-date.component';
import {MspDischargeDateComponent} from './common/discharge-date/discharge-date.component';
import {MspSchoolDateComponent} from './common/schoolDate/school-date.component';
import {Mod11CheckValidator} from './common/phn/phn.validator';
import {SinCheckValidator} from './common/sin/sin.validator';
import {MspGenderComponent} from './common/gender/gender.component';
import {FileUploaderComponent} from './common/file-uploader/file-uploader.component';
import {ThumbnailComponent} from './common/thumbnail/thumbnail.component';

import {MspPersonCardComponent} from './common/person-card/person-card.component';
import {MspContactCardComponent} from './common/contact-card/contact-card.component';
import {MspAddressCardPartComponent} from './common/address-card-part/address-card-part.component';

import MspDataService from './service/msp-data.service';
import CompletenessCheckService from './service/completeness-check.service';


import {MspApplicationPersonalInfoGuard} from './application/personal-info/personal-info-documents.guard'
import {MspApplicationAddressGuard} from './application/address/address.guard'
import {MspApplicationReviewGuard} from './application/review/review.guard'
import {MspApplicationConfirmationGuard} from './application/confirmation/confirmation.guard'

import {PersonalInfoGuard} from './assistance/personal-info/personal-info.guard';
import {ReviewGuard} from './assistance/review/review.guard';
import {AuthorizationGuard} from './assistance/authorize-submit/authorization.guard';
import {ConfirmationGuard} from './assistance/confirmation/confirmation.guard';

import {ApplicationComponent} from './application/application.component';
import {PersonalDetailsComponent} from './application/personal-info/personal-details/personal-details.component';
import {PrepareComponent} from './application/prepare/prepare.component';
import {PersonalInfoComponent} from './application/personal-info/personal-info.component';
import {AddressComponent} from './application/address/address.component';
import {ReviewComponent} from './application/review/review.component';
import {SendingComponent} from './application/sending/sending.component';
import {ConfirmationComponent} from './application/confirmation/confirmation.component';

import {AssistanceComponent} from './assistance/assistance.component';
import {AssistancePrepareComponent} from './assistance/prepare/prepare.component';
import {AssistancePersonalInfoComponent} from './assistance/personal-info/personal-info.component';
import {AssistancePersonalDetailComponent} from './assistance/personal-info/personal-details/personal-details.component';
import {AssistanceReviewComponent} from './assistance/review/review.component';
import {AssistanceAuthorizeSubmitComponent} from './assistance/authorize-submit/authorize-submit.component';
import {AssistanceSendingComponent} from './assistance/sending/sending.component';
import {AssistanceConfirmationComponent} from './assistance/confirmation/confirmation.component';
import {DeductionCalculatorComponent} from './assistance/prepare/deduction-calculator/deduction-calculator.component';
import {EligibilityCardComponent} from './assistance/prepare/eligibility-card/eligibility-card.component';
import { LocalStorageService, LOCAL_STORAGE_SERVICE_CONFIG } from 'angular-2-local-storage';
import {MspApiService} from "./service/msp-api.service";


let localStorageServiceConfig = {
    prefix: 'ca.bc.gov.msp',
    storageType: 'sessionStorage'
};

/**
 * The overall progress layout is created based on 'msp-prepare-v3-a.jpeg' in
 * https://apps.gcpe.gov.bc.ca/jira/browse/PSPDN-255?filter=16000
 */
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,

    AlertModule,
    ProgressbarModule,
    ModalModule,
    Ng2CompleterModule,

    RouterModule.forChild([
      {
        path: 'msp',
        children: [
          {
            path: '',
            component: LandingComponent
          },

          {
            path: 'application',
            component: ApplicationComponent,
            children: [
              {
                path: '',
                canActivate: [],
                redirectTo: 'prepare',
                pathMatch: 'full'
              },
              {
                path: 'prepare',
                component: PrepareComponent
              },
              {
                path: 'personal-info',
                canActivate: [MspApplicationPersonalInfoGuard],
                component: PersonalInfoComponent
              },
              {
                path: 'address',
                canActivate: [MspApplicationAddressGuard],
                component: AddressComponent
              },
              {
                path: 'review',
                canActivate: [MspApplicationReviewGuard],
                component: ReviewComponent
              },
              {
                path: 'sending',
                canActivate: [MspApplicationReviewGuard],
                component: SendingComponent
              },
              {
                path: 'confirmation',
                canActivate: [MspApplicationConfirmationGuard],
                component: ConfirmationComponent
              },

            ],
          },
          {
            path: 'assistance',
            component: AssistanceComponent,
            children: [
              {
                path: '',
                redirectTo: 'prepare',
                pathMatch: 'full'
              },
              {
                path: 'prepare',
                component: AssistancePrepareComponent
              },
              {
                path: 'personal-info',
                canActivate: [PersonalInfoGuard],
                component: AssistancePersonalInfoComponent,
                
              },
              {
                path: 'review',
                canActivate: [ReviewGuard],
                component: AssistanceReviewComponent
              },
              {
                path: 'authorize-submit',
                canActivate: [AuthorizationGuard],
                component: AssistanceAuthorizeSubmitComponent
              },
              {
                path: 'sending',
                //canActivate: [],
                component: AssistanceSendingComponent
              },
              {
                path: 'confirmation',
                canActivate: [ConfirmationGuard],
                component: AssistanceConfirmationComponent
              }
            ]
          }
        ]
      }
    ])

  ],
  declarations: [
    // General
    MspComponent,
    LandingComponent,
    MspNameComponent,
    MspBirthDateComponent,
    MspAddressComponent,
    MspProvinceComponent,
    MspPhoneComponent,
    MspPhnComponent,
    HealthNumberComponent,
    MspArrivalDateComponent,
    MspDischargeDateComponent,
    MspSchoolDateComponent,
    Mod11CheckValidator,
    SinCheckValidator,
    MspGenderComponent,
    MspProgressBarComponent,
    FileUploaderComponent,
    ThumbnailComponent,

    // View cards
    MspPersonCardComponent,
    MspContactCardComponent,
    MspAddressCardPartComponent,

    // Application
    ApplicationComponent,
    PersonalDetailsComponent,
    PrepareComponent,
    PersonalInfoComponent,
    AddressComponent,
    ReviewComponent,
    SendingComponent,
    ConfirmationComponent,

    // Assistance
    AssistanceComponent,
    AssistancePrepareComponent,
    AssistancePersonalInfoComponent,
    AssistancePersonalDetailComponent,
    AssistanceReviewComponent,
    AssistanceAuthorizeSubmitComponent,
    AssistanceSendingComponent,
    AssistanceConfirmationComponent,
    DeductionCalculatorComponent,

    EligibilityCardComponent
  ],

  providers: [
    // Services
    MspDataService,
    CompletenessCheckService,
    MspApiService,

    MspApplicationPersonalInfoGuard,
    MspApplicationAddressGuard,
    MspApplicationReviewGuard,
    MspApplicationConfirmationGuard,

    PersonalInfoGuard,
    ReviewGuard,
    AuthorizationGuard,
    ConfirmationGuard,
    LocalStorageService,
    {
        provide: LOCAL_STORAGE_SERVICE_CONFIG, useValue: localStorageServiceConfig
    }    
  ]
})
@Injectable()
export class MspModule {

}