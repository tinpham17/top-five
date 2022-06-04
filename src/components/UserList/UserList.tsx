import { UserItem } from './UserItem'
import { Description, Heading, List, Wrapper } from './UserList.styles'

export interface UserListProps {
  names: string[]
  onClickName: (name: string) => void
}

export function UserList(props: UserListProps) {
  return (
    <Wrapper>
      <Heading>Top 5 Github users</Heading>
      <Description>Tap the username to see more information</Description>
      <List>
        {props.names.map((name, index) => (
          <UserItem
            key={index}
            name={name}
            onClick={() => props.onClickName(name)}
          />
        ))}
      </List>
    </Wrapper>
  )
}
