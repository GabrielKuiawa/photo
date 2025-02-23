import { Component } from '@angular/core';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-create-image',
  imports: [FileUploadModule, ButtonModule, SearchComponent],
  templateUrl: './create-image.component.html',
  styleUrl: './create-image.component.css'
})
export class CreateImageComponent {
  cities: string| undefined;

  selectedCity: string | undefined;

  tngOnInit() {
      
    }
}
