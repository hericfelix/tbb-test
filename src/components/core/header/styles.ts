import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  width: 100%;
  padding: 1rem 1.5rem;

  background-color: ${({ theme }) => theme.colors.neutral.neutral6};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    gap: 2rem;
    justify-content: flex-start;
    padding-inline: 2.5rem;
  }

  img {
    height: 2.5rem;
  }

  .input_container {
    width: 100%;
  }
`;
