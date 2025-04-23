export function currentEnv() {
  const environment = process.env.NEXT_PUBLIC_NODE_ENV
  return environment
}

export const getBaseUrl = () => {
  const environment = currentEnv()

  switch (environment) {
    case 'develop':
      return process.env.NEXT_PUBLIC_LOCAL_BASE_URL_DEV
    case 'production':
      return process.env.NEXT_PUBLIC_BASE_URL
    default:
      return process.env.NEXT_PUBLIC_LOCAL_BASE_URL
  }
}
