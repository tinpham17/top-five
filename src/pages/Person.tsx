import { useNavigate, useParams } from 'react-router-dom'
import { RoutePath } from 'settings'
import { useUser } from 'functions/useUser'
import { UserBadge } from 'components/UserBadge'
import { AppLayout } from 'components/AppLayout'
import { Error } from 'components/Error'
import { Loading } from 'components/Loading'

export function Person() {
  const navigate = useNavigate()
  const params = useParams<{username: string}>()
  const { data, error, loading } = useUser(params.username || '')

  const goBack = () => {
    navigate(RoutePath.HOME)
  }

  if (loading) {
    return (
      <AppLayout
        title='Person'
        hasBack
        onClickBack={goBack}
      >
        <Loading/>
      </AppLayout>
    )
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
