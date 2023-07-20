import React from 'react';
import { Checkbox } from '@chakra-ui/react';

import { useProducts } from '@contexts/products-provider';

import { DesktopFilterContainer } from './styles';
import { CategoriesList } from '../styles';

import { categories } from '../constants';

export function DesktopFilter() {
  const { selectedProductCategories, setSelectedProductCategories } = useProducts();

  function handleCheckboxChange(checked: boolean, category: string) {
    if (checked) {
      return setSelectedProductCategories((prevState) => [...prevState, category]);
    }
    return setSelectedProductCategories((prevState) =>
      prevState.filter((selectedCategory) => selectedCategory !== category)
    );
  }
  return (
    <DesktopFilterContainer>
      <CategoriesList>
        {categories.map((category) => (
          <li>
            <Checkbox
              defaultChecked={
                !!selectedProductCategories.find(
                  (selectedCategory) => selectedCategory === category
                )
              }
              onChange={(e) => {
                handleCheckboxChange(e.currentTarget.checked, category);
              }}
            >
              {category}
            </Checkbox>
          </li>
        ))}
      </CategoriesList>
    </DesktopFilterContainer>
  );
}
