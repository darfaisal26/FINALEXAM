import React from 'react'



fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => response.json())
.then((result) => console.log(result));

const Api = () => {
  return (
    <div>

    </div>
  )
}

export default Api
