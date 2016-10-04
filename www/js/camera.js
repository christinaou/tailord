
// import { Camera } from 'ionic-native';


// Camera.getPicture(options).then((imageData) => {
//  // imageData is either a base64 encoded string or a file URI
//  // If it's base64:
//  let base64Image = 'data:image/jpeg;base64,' + imageData;
// }, (err) => {
//  // Handle error
// });


// import CameraPreview from 'ionic-native';

// // camera options (Size and location)
// let cameraRect: CameraPreviewRect = {
//   x: 100,
//   y: 100,
//   width: 200,
//   height: 200
// };


// // start camera
// CameraPreview.startCamera(
//   cameraRect, // position and size of preview
//   'front', // default camera
//   true, // tape to take picture
//   false, // disable drag
//   true // send the preview to the back of the screen so we can add overlaying elements
// );

// // Set the handler to run every time we take a picture
// CameraPreview.setOnPictureTakenHandler().subscribe((result) => {
//   console.log(result);
//   // do something with the result
// });


// // take a picture
// CameraPreview.takePicture({
//   maxWidth: 640,
//   maxHeight: 640
// });

// // Switch camera
// CameraPreview.switchCamera();

// // set color effect to negative
// CameraPreview.setColorEffect('negative');

// // Stop the camera preview
// CameraPreview.stopCamera();