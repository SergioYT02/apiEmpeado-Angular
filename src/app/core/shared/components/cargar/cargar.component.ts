import { Component } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-cargar',
  templateUrl: './cargar.component.html',
  styleUrls: ['./cargar.component.scss']
})
export class CargarComponent {
  isLoading$=this.spinnerService.isLoading$;
  constructor(private  spinnerService: SpinnerService){}
}
