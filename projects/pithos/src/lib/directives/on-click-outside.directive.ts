import { Directive, ElementRef, HostListener, output, inject } from '@angular/core';

@Directive({
    selector: '[pandoraOnClickOutside]',
    standalone: true,
})
export class OnClickOutsideDirective {
    private readonly elementRef = inject(ElementRef);

    public readonly pandoraOnClickOutside = output<MouseEvent>();

    @HostListener('document:click', ['$event'])
    public onDocumentClick(event: MouseEvent): void {
        const clickedInside = this.elementRef.nativeElement.contains(event.target);

        if (! clickedInside) {
            this.pandoraOnClickOutside.emit(event);
        }
    }
}
