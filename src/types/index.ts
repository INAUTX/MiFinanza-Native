export interface Categoria {
    id: number;
    nombre: string;
    icono: string;
    color: string;
    tipo: 'INGRESO' | 'GASTO';
  }
  
  export interface Ingreso {
    id: number;
    fecha: string;
    cantidad: string;
    categoria_id: number;
    etiqueta: string;
    comentario: string;
    foto: string;
    presupuesto_id: number;
    categoria: Categoria;
  }
  
  export interface Gasto {
    id: number;
    fecha: string;
    cantidad: string;
    categoria_id: number;
    presupuesto_id: number;
    etiqueta: string;
    comentario: string;
    foto: string;
    categoria: Categoria;
  }
  
  export interface Presupuesto {
    id: number;
    nombre: string;
    icono: string;
    presupuesto_inicial: string;
    ingresos: Ingreso[];
    gastos: Gasto[];
  }
  