import { styled } from 'styled-components';

export const FilterButton = styled.button`
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;

  background-color: ${({ theme }) => theme.colors.primary.dark};

  color: ${({ theme }) => theme.colors.neutral.white};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;
