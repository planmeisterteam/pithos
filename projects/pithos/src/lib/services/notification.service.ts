import { Injectable } from '@angular/core';
import { CollectionService } from './collection.service';
import { INotification } from '../types/notification/notification';

@Injectable({
    providedIn: 'root'
})
export class NotificationService extends CollectionService<INotification> { }
