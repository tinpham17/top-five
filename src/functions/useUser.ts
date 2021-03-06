import axios from 'axios'
import { useEffect, useState } from 'react'
import { User } from 'types/user'

export function useUser(username: string) {
  const [data, setData] = useState<User>()
  const [error, setError] = useState<any>()

  useEffect(() => {
    const fetch = async () => {
      setError(undefined)
      setData(undefined)
      try {
        const url = `https://api.github.com/users/${username}`
        const response = await axios.get<User>(url)
        setData(response.data)
      } catch(e) {
        setError(e)
      }
    }
    fetch()
  }, [username])

  return {
    loading: !data && !error,
    data,
    error
  }
}
