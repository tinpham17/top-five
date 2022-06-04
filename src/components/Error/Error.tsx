import styled from 'styled-components'
import imgSad from 'assets/images/sad.png'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 65px);
`

const Illustration = styled.img`
  width: 120px;
  opacity: 0.8;
`

const Message = styled.p`
  font-size: 32px;
  color: #898989;
  font-weight: 600;
`

export const Error: React.FC = () => {
  return (
    <Wrapper>
      <Illustration src={imgSad} />
      <Message>Oops</Message>
    </Wrapper>
  )
}
