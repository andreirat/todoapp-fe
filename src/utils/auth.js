export async function setAccessToken(token) {
  await localStorage.setItem("JWT", token)
}

export const getAccessToken = () => {
  return localStorage.getItem("JWT")
}

export const removeAccessToken = () => {
  return localStorage.removeItem("JWT")
}