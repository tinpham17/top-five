import { Wrapper } from './UserItem.styles'

export interface UserItemProps {
  name: string
  onClick: () => void
}

export function UserItem(props: UserItemProps) {
  return (
    <Wrapper onClick={props.onClick}>{props.name}</Wrapper>
  )
}
