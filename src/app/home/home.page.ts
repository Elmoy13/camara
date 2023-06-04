import { Component } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  capturedImage!: string;
  constructor() {}

  async takePhoto() {
    try {
      const image = await Camera.getPhoto({
        resultType: CameraResultType.Base64,
        quality: 90
      });

      this.displayImage(image.base64String);
    } catch (error) {
      console.error('Error al tomar la foto', error);
    }
  }

  displayImage(imageData: string | undefined) {
    this.capturedImage = imageData ? 'data:image/jpeg;base64,' + imageData : '';
  }



}
