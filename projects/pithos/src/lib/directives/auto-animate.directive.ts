import { Directive, AfterViewInit, ElementRef, input, inject, computed } from "@angular/core";
import autoAnimate, { AutoAnimateOptions } from "@formkit/auto-animate";


@Directive({
    selector: '[autoAnimate]',
    standalone: true
})
export class AutoAnimateDirective implements AfterViewInit {
    private readonly el = inject(ElementRef);

    public readonly autoAnimate = input<Partial<AutoAnimateOptions> | ''>();
    public readonly autoAnimateOptions = computed(() => this.autoAnimate() || {
        duration: 150,
    });

    ngAfterViewInit(): void {
        autoAnimate(this.el.nativeElement, this.autoAnimateOptions());
    }
}
