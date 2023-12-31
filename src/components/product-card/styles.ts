import { styled } from 'styled-components';

export const ProductCardContainer = styled.li`
  display: flex;
  gap: 0.5rem;

  padding: 0.5rem;

  background-color: ${({ theme }) => theme.colors.neutral.white};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  width: auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    max-width: 25rem;

    grid-column: auto/span 4;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;

  flex-basis: 30%;
  flex-shrink: 0;

  img {
    width: 8rem;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-basis: 1;
    padding: 1rem;

    img {
      width: 15rem;
    }
  }
`;
export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.neutral.neutral6};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary.dark};
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.neutral.neutral5};
    font-weight: 400;
  }
`;
