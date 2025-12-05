import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    private scriptURL = "https://script.google.com/macros/s/AKfycbwQbKBMXsDI4iHRh1tAH7NfWjUxGI2jdfjJXypNhmV4Uu65MfY4c3QhY5RpstFyZAWaCw/exec";

    constructor(private http: HttpClient) { }

    submitForm(data: any) {
        return this.http.post(this.scriptURL, data);
    }
}
