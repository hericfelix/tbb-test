import { styled } from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  border-radius: 0.25rem;
  padding-inline: 0.5rem;

  width: 100%;
  height: 2rem;

  background-color: ${({ theme }) => theme.colors.neutral.white};
  overflow: hidden;

  input {
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
  }
`;
