const url = 'https://api.github.com/licenses'

export const licenses = () => {
  return fetch(url)
    .then (res => {
      if (res.ok) 
        return res.json();
      else 
        Promise.reject('There are some issues');
      
    })
}
