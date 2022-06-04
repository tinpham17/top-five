import styled from 'styled-components'

export const Wrapper = styled.button`
  background-color: ${props => props.theme.colors.primary};
  border-color: ${props => props.theme.colors.dark};
  border-style: solid;
  border-width: 0px;
  border-radius: 4px;
  margin: 8px;
  min-width: 64px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  color: ${props => props.theme.colors.bright};
  &:hover {
    cursor: pointer;
    filter: brightness(1.10);
  }
  &:active {
    filter: brightness(0.90);
  }
`
