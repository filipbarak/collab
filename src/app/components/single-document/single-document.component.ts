import {
    animate, Component, Input, keyframes, OnInit, Renderer, state, style, transition, trigger,
    ViewChild
} from '@angular/core';
import {CommonService} from '../../common.service';

@Component({
    selector: 'single-document',
    templateUrl: './single-document.component.html',
    styleUrls: ['./single-document.component.css'],
    animations: [
        trigger('listState', [
            state('in', style({
                transform: 'translateY(0)',
                opacity: 1
            })),
            transition('void => *', [
                animate(500, keyframes([
                    style({
                        transform: 'translateY(100px)',
                        opacity: 0,
                        offset: 0
                    }),
                    style({
                        transform: 'translateY(50px)',
                        opacity: 0.5,
                        offset: 0.4
                    }),
                    style({
                        transform: 'translateY(20px)',
                        opacity: 0.8,
                        offset: 0.8
                    }),
                    style({
                        transform: 'translateY(0)',
                        opacity: 1,
                        offset: 1
                    })
                ]))
            ])
        ]),
        trigger('singleDocument', [
            state('normal', style({
                transform: 'scale(1)',
                opacity: 1
            })),
            state('clicked', style({
                transform: 'scale(1)',
                opacity: 1
            })),
            transition('normal => clicked', [
                animate(200, keyframes([
                    style({
                        transform: 'scale(0.6)',
                        offset: 0.4
                    }),
                    style({
                        transform: 'scale(0.7)',
                        offset: 0.6
                    }),
                    style({
                        transform: 'scale(0.8)',
                        offset: 0.8
                    }),
                    style({
                        transform: 'scale(1)',
                        offset: 1
                    })
                ]))
            ])
        ])
    ]
})
export class SingleDocumentComponent implements OnInit {
    @ViewChild('fileInput') fileInput;
    @Input() documents;

    constructor(public commonService: CommonService, private renderer: Renderer) {
    }

    ngOnInit() {
    }

    animateDoc(document) {
        if (document.state === 'normal') {
            document.state = 'clicked';
            console.log(document, 'DOC.');
            setTimeout(() => {
                document.state = 'normal';
            }, 200);
        }
    }

    editTitle(document, value) {
        document.titleEditable = false;
        document.title = value;

    }

    editImg() {
        let event = new MouseEvent('click', {bubbles: true});
        this.renderer.invokeElementMethod(
            this.fileInput.nativeElement, 'dispatchEvent', [event]);
    }

    readUrl(evt, document, index) {
        if (evt.target.files && evt.target.files[index]) {
            let reader = new FileReader();
            reader.onload = (evt: any) => {
                document.imgPath = evt.target.result;
            }
            reader.readAsDataURL(evt.target.files[index]);
        }
    }

}
