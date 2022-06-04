import { RoutePath } from 'settings'
import { AppLayout } from 'components/AppLayout'
import { UserList } from 'components/UserList'
import { useUsers } from 'functions/useUsers'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const navigate = useNavigate()
  const { usernames } = useUsers()

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
