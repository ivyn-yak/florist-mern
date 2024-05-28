import React from 'react'
import { useAuthContext } from '../auth/useAuthContext'

const useLogout = () => {
    const {dispatch} = useAuthContext()

    const logout = () => {
        // localStorage.removeItem("token")
        localStorage.removeItem("user")
        // localStorage.removeItem("cart")

        dispatch({type: 'LOGOUT'})
    }

  return {logout}
}

export default useLogout