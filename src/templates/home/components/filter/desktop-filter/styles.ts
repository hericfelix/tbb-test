import { styled } from 'styled-components';

export const DesktopFilterContainer = styled.aside`
  flex-shrink: 0;
  padding-right: 1rem;
  border-right: ${({ theme }) => `1px solid ${theme.colors.neutral.neutral3}`};
  height: 100%;
`;
