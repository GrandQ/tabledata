import { useEffect, useState } from "react";

const useFetch= <I extends unknown>(url: string) => {
    const [items, setItems] = useState<I | []>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(result => {
            setItems(result.response.data)
        })
        .catch(err => {
            setError(err.message)
        })
        .finally(() => {
            setLoading(false);
        })
    }, [url])

    return {items, loading, error}
}

export default useFetch;