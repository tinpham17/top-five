import { AppLayout } from 'components/AppLayout'
import { UserList } from 'components/UserList'
import { useUsers } from 'functions/useUsers'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'settings'

export function Home() {
  const { usernames } = useUsers()
  const navigate = useNavigate()

  const handleClickName = (username: string) => {
    navigate({
      pathname: `${RoutePath.PERSON}/${username}`,
    })
  }

  return (
    <AppLayout
      title='Home'
    >
      <UserList names={usernames} onClickName={handleClickName} />
    </AppLayout>
  )
}
