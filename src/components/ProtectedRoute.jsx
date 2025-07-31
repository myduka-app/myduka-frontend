import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('access_token')
  const userType = localStorage.getItem('user_type')

  if (!token || !userType) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute