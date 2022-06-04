import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.colors.neutral};
  font-family: Arial, Helvetica, sans-serif;
`

export const Topbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  background-color: ${props => props.theme.colors.bright};
  border-bottom: 1px solid rgb(216, 216, 216);
  box-shadow: rgb(216 216 216) 0px 0px 0px;
  padding: 0 ${props => props.theme.spaces[2]};
`

export const Title = styled.div`
  color: rgb(28, 28, 30);
  font-size: 18px;
  font-weight: 600;
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
`

export const Action = styled.div`
  z-index: 1;
  color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
    filter: brightness(1.10);
  }
  &:active {
    filter: brightness(0.90);
  }
`

export const Content = styled.div``
