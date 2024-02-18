import { Component } from "@angular/core";

@Component({
    selector: 'app-display-details',
    templateUrl: './display-details.component.html',
    styleUrl: './display-details.component.css'
})
export class DisplayDetails {
    displayDetails = false;
    password = 'chocolate';
    userLogs: string[] = [];
    onDisplayDetails() {
        this.displayDetails = !this.displayDetails;
        const userLog = "Details diaplyed at: " + new Date();
        this.userLogs.push(userLog);
    }
}