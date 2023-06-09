import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ByCapitalComponent } from './components/by-capital/by-capital.component';
import { ByRegionComponent } from './components/by-region/by-region.component';

import { SharedModule } from '../../shared/shared.module';
import { ByNameComponent } from './components/by-name/by-name.component';
import { TableComponent } from './components/table/table.component';
import { GetCountryByCapitalUseCase, GetCountryByNameUseCase, GetCountryByRegionUseCase } from 'src/app/domain/countries/countries.domain';

@NgModule({
  declarations: [
    ByCapitalComponent,
    ByNameComponent,
    ByRegionComponent,
    TableComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    ByCapitalComponent,
    ByNameComponent,
    ByRegionComponent,
  ],
  providers: [
    GetCountryByNameUseCase,
    GetCountryByCapitalUseCase,
    GetCountryByRegionUseCase,
  ],
})
export class CountriesModule {}
