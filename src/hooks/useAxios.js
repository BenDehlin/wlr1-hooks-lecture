import {useState, useEffect} from 'react'
import axios from 'axios'

const useAxios = (url, dataLocation) => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(url)
    .then(res => {
      dataLocation ? setData(res.data[dataLocation]) : setData(res.data)
    })
    .catch(err => console.log(err))
  }, [url, dataLocation])

  return [data, setData]
}

export default useAxios