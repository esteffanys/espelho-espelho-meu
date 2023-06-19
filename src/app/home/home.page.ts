import { Component } from '@angular/core';
import { CameraPreview } from '@capacitor-community/camera-preview';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    CameraPreview.start({ parent: "cameraPreview"});
  }

}
