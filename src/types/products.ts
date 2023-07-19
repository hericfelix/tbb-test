export interface ProductImage {
  asset: {
    url: string;
  };
}

export interface Product {
  id: string;
  jsonId: string;
  name: string;
  shortDescription: string;
  images: ProductImage[];
  category: {
    _id: string;
    name: string;
  };
}
