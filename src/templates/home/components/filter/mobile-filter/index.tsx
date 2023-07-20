import React, { useState } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Checkbox
} from '@chakra-ui/react';

import { useProducts } from '@contexts/products-provider';

import { FilterButton } from './styles';
import { CategoriesList } from '../styles';

import { categories } from '../constants';

export function MobileFilter() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const { selectedProductCategories, setSelectedProductCategories } = useProducts();

  function handleClose() {
    setIsDrawerOpen(false);
  }

  function handleCheckboxChange(checked: boolean, category: string) {
    if (checked) {
      return setSelectedProductCategories((prevState) => [...prevState, category]);
    }
    return setSelectedProductCategories((prevState) =>
      prevState.filter((selectedCategory) => selectedCategory !== category)
    );
  }

  return (
    <>
      <FilterButton
        onClick={() => {
          setIsDrawerOpen(true);
        }}
      >
        Filtros
      </FilterButton>
      <Drawer isOpen={isDrawerOpen} placement="right" onClose={handleClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Categorias</DrawerHeader>

          <DrawerBody>
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
