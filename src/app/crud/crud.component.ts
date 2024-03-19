import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { Producto } from '../modells/Producto';
import { ProductoService } from '../service/producto.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit{
  productos : Array<Producto>
  formProducto: FormGroup
  activeForm: boolean
  crear: boolean
  id: number
  loader: boolean

  constructor(private pService: ProductoService, private fb: FormBuilder, private message: MessageService){
    this.productos = new Array<Producto>();
    this.activeForm = false;
    this.crear = false;
    this.loader = true;
    this.id = 0;
    this.formProducto = fb.group({
      nombreProducto : new FormControl('', [Validators.required]),
      precio : new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      stock : new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    })
  }

  ngOnInit(): void {
    Aos.init()
    this.getAllProducts()
  }

  getAllProducts(){
    this.pService.getAll().subscribe(res =>{
      this.productos = res;    },
    err=>{
      this.message.add({ severity: 'error', summary: '!Error inesperado¡', detail: 'Ha ocurrido un error interno, por favor comuniquese con el administrador del sistema' });
    })
  }

  newProducto(){
    if(this.formProducto.valid){
      let nuevoProducto = new Producto()
      nuevoProducto.nombreProducto = this.formProducto.get('nombreProducto')?.value;
      let precio = this.formProducto.get('precio')?.value;
      nuevoProducto.precio = precio.replace('.', '');
      nuevoProducto.stock = this.formProducto.get('stock')?.value;
      this.loader = !this.loader;
      this.pService.newProducto(nuevoProducto).subscribe(res =>{
        this.formProducto.reset();
        this.active();
        this.message.add({ severity: 'success', summary: 'Completado', detail: 'Se ha creado un nuevo producto' });
        this.getAllProducts();
        this.loader = !this.loader;
      },
      err =>{
        this.loader = !this.loader;
        this.message.add({ severity: 'warn', summary: '!Error inesperado¡', detail: 'Ha ocurrido un error interno, por favor comuniquese con el administrador del sistema' });
      })
    }else{
      this.message.add({ severity: 'warn', summary: 'Datos invalidos', detail: 'Por favor ingrese todos los campos' });
    }
  }

  cargarUpdate(producto: Producto){
    this.id = producto.idPropucto!;
    this.formProducto.get('nombreProducto')?.setValue(producto.nombreProducto);
    this.formProducto.get('precio')?.setValue(producto.precio);
    this.formProducto.get('stock')?.setValue(producto.stock);
    this.active();
  }

  update(){
    if(this.formProducto.value){
      let nuevoProducto = new Producto();
      nuevoProducto.idPropucto = this.id;
      nuevoProducto.nombreProducto = this.formProducto.get('nombreProducto')?.value;
      let precio = this.formProducto.get('precio')?.value;
      nuevoProducto.precio = precio;
      nuevoProducto.stock = this.formProducto.get('stock')?.value;
      this.loader = !this.loader;
      this.pService.update(nuevoProducto).subscribe(res =>{
        this.active();
        this.formProducto.reset();
        this.getAllProducts();
        this.loader = !this.loader;
      },
      err =>{
        this.loader = !this.loader;
        this.message.add({ severity: 'error', summary: '!Error inesperado¡', detail: 'Ha ocurrido un error interno, por favor comuniquese con el administrador del sistema' });
      })
    }
  }

  active(){
    this.activeForm = !this.activeForm;
  }
  
  eliminar(idProducto: number){
    this.loader = !this.loader;
    this.pService.deleteById(idProducto).subscribe(res => {
      this.getAllProducts();
      this.loader = !this.loader;
    },
    err =>{
      this.loader = !this.loader;
      this.message.add({ severity: 'warn', summary: '!Error inesperado¡', detail: 'Ha ocurrido un error interno, por favor comuniquese con el administrador del sistema' });
    })
  }
}
