import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 1.5rem;

  button {
    background: none;
  }
`;

export const NumButton = styled.button`
  border: none;
  border-radius: 0.375rem;

  width: 1.5rem;
  height: 1.5rem;

  color: ${({ theme }) => theme.colors.primary.default};
  font-size: 1rem;

  cursor: pointer;

  :hover:enabled {
    transition: 0.2s;

    background: #dfdfdf;
  }

  :disabled {
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.primary.default};

    background: ${({ theme }) => theme.colors.primary.default};

    color: #ffffff;

    cursor: default;
  }
`;

export const ArrowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;

  width: 1.5rem;
  height: 1.5rem;

  color: ${({ theme }) => theme.colors.primary.default};
  cursor: pointer;

  :disabled {
    cursor: default;
    color: red;
    color: ${({ theme }) => theme.colors.primary.light};
  }

  :hover:enabled {
    transition: 0.2s;
    background: #dfdfdf;
  }
`;
