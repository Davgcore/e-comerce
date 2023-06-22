import axios from "axios"
import { useState } from "react"

const useFetch = (baseUrl) => {
    const [infoApi, setInfoApi] = useState()
    const [hasError, setHasError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const getApi = (path) => {
        const url = `${baseUrl}${path}`
        axios.get(url)
        .then(res => {
            setInfoApi(res.data)
            setHasError(false)
        })
        .catch(err => {
            console.log(err)
            setHasError(true)
        })
        .finally(() =>{
            setIsLoading
        })
    }

    return [ infoApi, getApi, hasError, isLoading]
}

export default useFetch