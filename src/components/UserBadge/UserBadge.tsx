import Skeleton from 'react-loading-skeleton'
import { User } from 'types/user'
import { Avatar, Info, Location, Name, Wrapper } from './UserBadge.styles'

export interface UserBadgeProps {
  user: User | undefined
}

export function UserBadge(props: UserBadgeProps) {
  return (
    <Wrapper>
      {props.user
        ? <Avatar src={props.user?.avatar_url}/>
        : (
          <Skeleton
            width={50}
            height={50}
          />
        )  
      }
      <Info>
        <Name>{props.user ? props.user.name : <Skeleton width={240} />}</Name>
        <Location>{props.user ? props.user.location : <Skeleton width={240} />}</Location>
      </Info>
    </Wrapper>
  )
}
