import {Component, OnInit, Input} from "@angular/core";

@Component({
    selector: 'ui-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
    @Input() type: string;
    @Input() heading: string;
    @Input() content: string;
    @Input() size: number;
    @Input() offset: number;

    constructor() {
        this.type = 'default';
        this.heading = 'Panel';
        this.content = 'Panel content';
        this.size = 12;
        this.offset = 0;
    }

    ngOnInit() {
    }

}
