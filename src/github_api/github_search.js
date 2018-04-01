const root = 'https://api.github.com/search/repositories?q='
const res = []

export const github_search = (data, starData, license, inc_forked) => {
  const path = functionality(data, starData, license, inc_forked)
  return fetch(`${root}${path}`)
    .then(res =>
      res.ok ? res.json() : Promise.reject('Need to try again!')
    )
}

const functionality = (data, starData, license, inc_forked) => {
  data ? res.push(`${data}`) : ''
  license ? res.push(`license:${license}`) : ''
  inc_forked ? res.push('fork:true') : ''
  res.push(`stars:>=${starData || 0}`)
  return res.join('+')
}

