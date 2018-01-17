import { Injectable, Output, EventEmitter } from '@angular/core'

@Injectable()
export class PanelService {

    @Output() static title: EventEmitter<any> = new EventEmitter()

}