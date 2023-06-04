import { Component } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Geolocation, GeolocationPosition } from '@capacitor/geolocation';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  capturedImage!: string;
  latitude: number = 0;
  longitude: number = 0;
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
  async getCurrentLocation() {
    try {
      const position: GeolocationPosition = await Geolocation.getCurrentPosition();
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      console.log('Latitud: ', this.latitude);
      console.log('Longitud: ', this.longitude);
    } catch (error) {
      console.error('Error al obtener la ubicación', error);
    }
  }


}
