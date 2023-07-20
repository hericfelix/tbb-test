import React from 'react';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

import { Input } from '@components/input';

import { useProducts } from 'src/contexts';

import { HeaderContainer } from './styles';

import logo from '@images/logo@2x.png';

export function Header() {
  const { productNameSearchValue, setProductNameSearchValue } = useProducts();

  console.log(productNameSearchValue);
  return (
    <HeaderContainer>
      <img alt="Brooklyn Brothers Logo" src={logo} />
      <div className="input_container">
        <Input
          value={productNameSearchValue}
          onChange={(e) => {
            setProductNameSearchValue(e.currentTarget.value);
          }}
          placeholder="Busque aqui"
          icon={<MagnifyingGlassIcon height={24} width={24} />}
        />
      </div>
    </HeaderContainer>
  );
}
