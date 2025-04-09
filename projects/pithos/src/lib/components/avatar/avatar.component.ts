import { Component, Input, OnDestroy, input } from '@angular/core';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';

@Component({
    selector: 'pandora-avatar',
    standalone: true,
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
    public readonly src = input<string>('');
    public readonly size = input<AvatarSize>('md');

    get getSizeClass() {
        return `avatar__image--${ this.size() }`
    }
}