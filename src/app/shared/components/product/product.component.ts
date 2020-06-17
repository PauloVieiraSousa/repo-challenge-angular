import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  @Input() title: string;
  @Input() image: string = 'assets/images/fake-product-img.png';
  @Input() price: number;

  constructor() { }

  ngOnInit(): void {}

}
