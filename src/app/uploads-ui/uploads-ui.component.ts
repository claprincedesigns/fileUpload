import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';

import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-uploads-ui',
  templateUrl: './uploads-ui.component.html',
  styleUrls: ['./uploads-ui.component.css']
})
export class UploadsUiComponent implements OnInit {
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  uploadState: Observable<string>;

  constructor(private storage: AngularFireStorage) { }

  upload(event) {
    const file = event.target.files[0];
    const filePath = '//fir-upload-8f061.appspot.com';
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadProgress = task.percentageChanges();

    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => this.downloadURL = fileRef.getDownloadURL() )
   )
  .subscribe();
  }

  ngOnInit() {
  }

}
