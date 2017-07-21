import { Injectable } from '@angular/core';
// first import http
import { Http } from '@angular/http';
import 'rxjs'
// rxjs is an observables library



@Injectable()
export class NoteService {

  constructor(private _http: Http) { }

  serviceCreateNote(note) {
  	return this._http.post('/api/notes', note)
  	// service goes to back-end which goes to one of the routes in the routes.js file
  	// from there goes to the correlating function in controller.js 
  	// will get one of the json results
  		.map( (response) => response.json())
  		// promises return to function it was called from (in this case, createNote from component.ts file)
  		.toPromise()
  }

  serviceGetNotes() {
    console.log('goodbye')
  	return this._http.get('/api/notes')
  		.map( (response) => response.json())
  		.toPromise()
  }

}
