import axios from "axios"
import getConfigAuth from "../utils/getConfigAuth"
import { useState } from "react"

const usePurchase = () => {

    const [purchases, setPurchases] = useState()

    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'

    const getAllPurchase = () => {
        axios.get(url, getConfigAuth())
            .then(res => setPurchases(res.data))
            .catch(err => console.log(err))
    }

    const makePurchase = () => {
        axios.post(url, null, getConfigAuth())
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    return { purchases, getAllPurchase, makePurchase }
}

export default usePurchase