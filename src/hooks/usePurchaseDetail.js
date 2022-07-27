import { useEffect, useState } from "react";

const usePurchaseDetail = toolId =>{
    const [purchase, setPurchase] =useState({});

    useEffect( ()=>{
        const url = `http://localhost:5000/tool/${toolId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPurchase(data));

    }, [toolId]);
    return [purchase]
}

export default usePurchaseDetail;