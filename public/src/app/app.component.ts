import { Component } from '@angular/core';
import { NoteService} from './note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Anonymous Notes';

  notes: Array<any>;

  note = {
  	content: ''
  }

  errors: Array<any>;

  constructor(private _noteService: NoteService) { }

  ngOnInit() {
  	this.getNotes();
  }

  getNotes() {
  	// component to backend to service to routes 
  	this._noteService.serviceGetNotes()
  		.then( (notes) => this.notes = notes)
  		.catch( (err) => console.log(err))
  }

  createNote() {
  	// when we hit submit on the form, it will come here 
  	// take form theyve updated and pass that in here
  	this._noteService.serviceCreateNote(this.note)
  		// taking promise sent from backend so if successful, it will come here
  		.then( (success) => {
  			this.getNotes();
        this.note = {
  				content: ''
  			}
  		})
  		// if there are errors sent from the backend it will come here
  		.catch( (err) => {
  			this.errors = JSON.parse(err._body);
  		})
  }
}
