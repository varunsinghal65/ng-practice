import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    template: `
    <span class="status" [class.checked-in]="passengerDetail.checkedIn"></span>
    <input
        *ngIf="isEditMode"
        [(ngModel)]="passengerDetail.name">
    <div *ngIf="!isEditMode">
        {{ passengerDetail.name }}
    </div>

    <button (click)="toggleEdit()">{{ isEditMode ? "Done" : "Edit" }}
    </button>

    <button (click)="handleRemove()">Remove</button>
    `
})
export class PassengerDetailComponent implements  OnChanges {

    isEditMode: boolean;

    @Output()
    editPaxEvent: EventEmitter<Passenger>;

    @Output()
    removePaxEvent: EventEmitter<Passenger>;

    @Input()
    passengerDetail: Passenger | undefined;

    constructor() {
        this.isEditMode = false;
        this.editPaxEvent = new EventEmitter<Passenger>();
        this.removePaxEvent = new EventEmitter<Passenger>();
        this.passengerDetail = undefined;
    }

    ngOnChanges(changes: SimpleChanges): void {
        let incomingPax = changes.passengerDetail.currentValue;
        this.passengerDetail = Object.assign({}, incomingPax);
    }

    toggleEdit(): void {
        if (this.isEditMode) this.editPaxEvent.emit(this.passengerDetail);
        this.isEditMode = !this.isEditMode;
    }

    handleRemove(): void {
        this.removePaxEvent.emit(this.passengerDetail);
    }
}
