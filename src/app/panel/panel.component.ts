import { Component, Input } from '@angular/core'
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
    public typeButton: string
    @Input()public routerButton: string
    
    constructor() {
        PanelService.title.subscribe((res) => {
            this.title = res.title
            this.titleStrong = res.strong
            this.titleButton = res.titleButton
            this.typeButton = res.typeButton
            this.routerButton = res.routerButton
        }) 
    }
}