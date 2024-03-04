import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';
import { ConfirmpickupComponent } from './confirmpickup/confirmpickup.component';
import { WheretoComponent } from './whereto/whereto.component';
import { SearchdestinationComponent } from '../searchdestination/searchdestination.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [

  {
    path: '',
    component:SearchComponent,
  },
 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
