import {useState,useEffect} from 'react'
import axios from "axios"
function ProductsAPI() {
    const [products,setProdcuts]=useState([])
    const [callback,setCallback]=useState(false)
    const [category,setCategory]=useState('')
    const [sort,setSort]=useState('')
    const [search,setSearch]=useState('')
    const [page,setPage]=useState(1)
    const [result,setResult]=useState(0)
    useEffect(()=>{
        const getProducts=async()=>{
            const res=await axios.get(`/api/products?limit=${page*9}&${category}&${sort}&title[regex]=${search}`)
            setProdcuts(res.data.products);
            setResult(res.data.result)
            console.log(res)
        }
        getProducts()
    },[callback,category,sort,search,page])

    return {
        products:[products,setProdcuts],
        callback:[callback,setCallback],
        category:[category,setCategory],
        sort: [sort,setSort],
        search:[search,setSearch],
        page: [page,setPage],
        result:[result,setResult]
    }
}

export default ProductsAPI
