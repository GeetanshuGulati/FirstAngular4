import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRotate]'
})
export class RotateDirective {

  constructor(private Element:ElementRef) {
  this.rotate = 0
  this.height = 126
   setInterval(()=>{
    Element.nativeElement.style.transform = "rotate("+this.rotate+"deg)"
    if(this.rotate < 180){
      this.height--
      console.log(this.heightheight)
    }
    else{
      this.height++
    }
    Element.nativeElement.style.height = this.height+"px"
    this.rotate++
    if(this.rotate >360) this.rotate = 0
   },10)
  }

}
