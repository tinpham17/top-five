import { UserItem } from './UserItem'
import { Wrapper } from './UserList.styles'

export interface UserListProps {
  names: string[]
  onClickName: (name: string) => void
}

export function UserList(props: UserListProps) {
  return (
    <Wrapper>
      {props.names.map((name, index) => (
        <UserItem
          key={index}
          name={name}
          onClick={() => props.onClickName(name)}
        />
      ))}
    </Wrapper>
  )
}
