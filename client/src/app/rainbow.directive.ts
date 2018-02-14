import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
  constructor(private Element:ElementRef) {
    this.count = 0
    this.color = ["red","green","blue"]
    setInterval(()=>{
      Element.nativeElement.style.backgroundColor = this.color[this.count]
      this.count++
      if(this.count == 3) this.count = 0
    },1000)
   }
}
