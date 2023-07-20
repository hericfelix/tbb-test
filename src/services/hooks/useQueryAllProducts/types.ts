import { AllQueryResponse, Product } from 'src/types';

export interface QueryAllProductsVariables {
  name?: string;
  category?: string;
}

export interface AllProductsJsonData {
  allProductsJson: AllQueryResponse<Product>;
}
