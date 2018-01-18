import { Injectable, Output, EventEmitter } from '@angular/core'

@Injectable()
export class PanelService {

    @Output() static emitValues: EventEmitter<any> = new EventEmitter()

}