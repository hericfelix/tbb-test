export interface ProductImage {
  asset: {
    url: string;
  };
}

export type ProductCategoryName =
  | 'Roll On'
  | 'Alcohol en Gel'
  | 'Aerosol'
  | 'Jabón Líquido'
  | 'Jabón Barra'
  | 'Crema Soft Solid'
  | 'Talco';

export interface Product {
  id: string;
  jsonId: string;
  name: string;
  shortDescription: string;
  images: ProductImage[];
  category: {
    _id: string;
    name: ProductCategoryName;
  };
}
