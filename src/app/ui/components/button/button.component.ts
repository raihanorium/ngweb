import {Component, OnInit, Input} from "@angular/core";

@Component({
    selector: 'ui-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

    @Input() type: string;
    @Input() size: string;

    constructor() {
        this.type = 'default';
        this.size = 'md';
    }

    ngOnInit() {
    }
}
