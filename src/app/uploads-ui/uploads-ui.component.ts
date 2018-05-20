import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-uploads-ui',
  templateUrl: './uploads-ui.component.html',
  styleUrls: ['./uploads-ui.component.css']
})
export class UploadsUiComponent implements OnInit {
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  uploadState: Observable<string>;

  constructor(private afStorage: AngularFireStorage) { }

  // upload(event) {
  //   const randomId = Math.random().toString(36).substring(2);
  //   this.ref = this.afStorage.ref(randomId);
  //   this.task = this.ref.put(event.target.files[0]);
  //   this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
  //   this.uploadProgress = this.task.percentageChanges();
  //   this.downloadURL = this.task.downloadURL();
  // }

  ngOnInit() {
  }

}
