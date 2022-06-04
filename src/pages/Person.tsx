import { useNavigate, useParams } from 'react-router-dom'
import { RoutePath } from 'settings'
import { useUser } from 'functions/useUser'
import { UserBadge } from 'components/UserBadge'
import { AppLayout } from 'components/AppLayout'
import { Error } from 'components/Error'

export function Person() {
  const navigate = useNavigate()
  const params = useParams<{username: string}>()
  const { data, error } = useUser(params.username || '')

  const goBack = () => {
    navigate(RoutePath.HOME)
  }

  if (error) {
    return (
      <AppLayout
        title='Person'
        hasBack
        onClickBack={goBack}
      >
        <Error/>
      </AppLayout>
    )
  }
  return (
    <AppLayout
      title='Person'
      hasBack
      onClickBack={goBack}
    >
      <UserBadge user={data} />
    </AppLayout>
  )
}
