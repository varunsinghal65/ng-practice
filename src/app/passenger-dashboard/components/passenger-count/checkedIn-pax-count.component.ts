import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'checkedIn-pax-count',
    template: `<h3> Total checked in passengers are : {{ totalCheckedIn()  }} / {{ passengers.length }}`
})
export class CheckedinPaxCountComponent {

    @Input()
    passengers: Passenger[];

    constructor() {
        this.passengers = [];
    }

    totalCheckedIn(): number {
        return this.passengers.filter((pax) => pax.checkedIn == true).length;
    }

}