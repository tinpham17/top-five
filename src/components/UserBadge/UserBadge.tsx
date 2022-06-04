import { User } from 'types/user'
import { Avatar, Info, Location, Name, Wrapper } from './UserBadge.styles'

export interface UserBadgeProps {
  user: User
}

export function UserBadge(props: UserBadgeProps) {
  return (
    <Wrapper>
      <Avatar src={props.user.avatar_url} />
      <Info>
        <Name>{props.user.name}</Name>
        <Location>{props.user.location}</Location>
      </Info>
    </Wrapper>
  )
}
