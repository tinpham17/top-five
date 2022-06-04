import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  background-color: #f2f2f2;
  font-family: Arial, Helvetica, sans-serif;
`

export const Topbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(216, 216, 216);
  box-shadow: rgb(216 216 216) 0px 0px 0px;
  padding: 0 16px;
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
  color: rgb(0, 122, 255);
  &:hover {
    cursor: pointer;
    color: rgb(25 135 255);
  }
`

export const Content = styled.div``
