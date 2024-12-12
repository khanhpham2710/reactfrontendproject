import { useEffect, useState } from "react";

export default function useDebounce(value,delay = 1000){
    const [newValue,setNewValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
          setNewValue(value);
        }, delay);
    
        return () => clearTimeout(handler);
      }, [value, delay]);
    

    return newValue
}