import React from 'react'
import useFetch from '../hooks/useFetch'

type Entries = {
  entries: object[]
}

const Table = () => {
  const { data, isLoading } = useFetch('https://api.publicapis.org/entries')

  console.log(data)
  

  return (
    <div>Table</div>
  )
}

export default Table