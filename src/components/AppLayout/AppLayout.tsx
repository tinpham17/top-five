import { ReactNode } from 'react'
import { Action, Content, Title, Topbar, Wrapper } from './AppLayout.styles'

export interface AppLayoutProps {
  title: string
  hasBack?: boolean
  onClickBack?: () => void
  children: ReactNode
}

export const AppLayout: React.FC<AppLayoutProps> = (props) => {
  return (
    <Wrapper>
      <Topbar>
        {props.hasBack && (
          <Action onClick={props.onClickBack}>Back</Action>
        )}
        <Title>{props.title}</Title>
      </Topbar>
      <Content>
        {props.children}
      </Content>
    </Wrapper>
  )
}
