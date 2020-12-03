import { Component } from '@angular/core';
import { Passenger } from '../models/passenger.interface';
@Component({
    selector: 'passenger-dashboard',
    template: `
    <h1> Welcome to passenger dashboard</h1>
    <checkedIn-pax-count [passengers]="passengers"></checkedIn-pax-count>
    <ul style="list-style-type:none;">
        <li style="margin-bottom:1%;" *ngFor="let pax of passengers">
            <passenger-detail
                [passengerDetail]="pax"
                (editPaxEvent) = "handleEdit($event)"
                (removePaxEvent) = "handleRemove($event)">
            </passenger-detail>
        </li>
    </ul>
    `
})
export class PassengerDashBoardComponent {

    passengers: Passenger[] = [{
        id: 1,
        name: "Varun Singhal",
        checkedIn: true,
        children: null
    }, {
        id: 2,
        name: "Alpha",
        checkedIn: true,
        children: [{ id: 1, age: 10 }]
    }, {
        id: 3,
        name: "Bravo",
        checkedIn: false,
        children: null
    }, {
        id: 4,
        name: "Charlie",
        checkedIn: false,
        children: null
    }, {
        id: 5,
        name: "Delta",
        checkedIn: false,
        children: null
    }];

    handleEdit(paxToUpdate: Passenger) {
        this.passengers = this.passengers.map((pax)=>{
            if (pax.id === paxToUpdate.id) {
                pax = Object.assign({}, pax, paxToUpdate);
            }
            return pax;
        });
    }

    handleRemove(paxToRemove: Passenger) {
        this.passengers = this.passengers.filter((pax: Passenger)=>{
            return paxToRemove.id !== pax.id;
        });
    }
}