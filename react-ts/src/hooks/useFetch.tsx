import { useState, useEffect } from 'react'

const useFetch = (url: string, options?: RequestInit) => {
  const [data, setData] = useState<object | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(url, options)
        const data = await response.json()
        setData(data)
      } catch (error) {
        console.log(error)
        throw error
      }
      setIsLoading(false)
    }
    fetchData()
  }, [url, options])

  return { data, isLoading }

}

export default useFetch