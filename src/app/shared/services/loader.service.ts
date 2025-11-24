import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {
    private loadingSubject = new BehaviorSubject<boolean>(false);
    public loading$ = this.loadingSubject.asObservable();

    private minDisplayTime = 2000; // 2 seconds
    private loadingStartTime: number | null = null;
    private hideTimer: any = null;

    show(): void {
        // Clear any existing hide timer
        if (this.hideTimer) {
            clearTimeout(this.hideTimer);
            this.hideTimer = null;
        }

        // Only set start time if not already loading
        if (!this.loadingSubject.value) {
            this.loadingStartTime = Date.now();
            this.loadingSubject.next(true);

        }
    }

    hide(): void {
        if (!this.loadingSubject.value) {

            return;
        }

        const now = Date.now();
        const elapsed = this.loadingStartTime ? now - this.loadingStartTime : this.minDisplayTime;
        const remaining = Math.max(0, this.minDisplayTime - elapsed);



        if (this.hideTimer) {
            clearTimeout(this.hideTimer);
        }

        this.hideTimer = setTimeout(() => {
            this.loadingSubject.next(false);
            this.loadingStartTime = null;
            this.hideTimer = null;

        }, remaining);
    }
}