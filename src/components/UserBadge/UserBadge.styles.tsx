import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
`

export const Avatar = styled.div<{ src: any | undefined }>`
  height: 50px;
  width: 50px;
  border-radius: 20%;
  background: url(${props => props.src});
  background-size: cover;
  background-position: center;
`

export const Info = styled.div`
  margin-left: 16px;
`

export const Name = styled.div`
  font-weight: 600;
  margin-top: 4px;
`

export const Location = styled.div`
  margin-top: 8px;
  font-size: 14px;
  color: #7c7c7c;
`
