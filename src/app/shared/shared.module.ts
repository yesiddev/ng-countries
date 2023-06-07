import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { SearchbarComponent } from './components/searchbar/searchbar.component';

@NgModule({
  declarations: [SidebarComponent, SearchbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [SidebarComponent, SearchbarComponent],
})
export class SharedModule {}
