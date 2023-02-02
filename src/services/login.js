import { useCookies } from 'react-cookie'

export default async function logins() {
  console.log('working')
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies(['test'])

  setCookie('test', 'userToken')

  return new Promise('Batata')
}
