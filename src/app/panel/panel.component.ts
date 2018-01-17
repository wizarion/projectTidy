import { Component } from '@angular/core'
import { PanelService } from './panel.service'

@Component({
    selector: 'app-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.css'],
    providers: [PanelService]
})
export class PanelComponent{

    public title: string
    public titleStrong: string
    public titleButton: string
    public hidden: string
    
    constructor() {
        PanelService.title.subscribe((res) => {
            this.title = res.title
            this.titleStrong = res.strong
            this.titleButton = res.button
            this.hidden = res.hidden
            console.log(res)
        }) 
    }
}