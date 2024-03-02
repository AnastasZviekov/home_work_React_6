import {useState} from 'react'
import {useEffect} from "react";

const API = "https://react-fast-pizza-api.onrender.com/api/menu";
export const Box = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
            const getData = async () => {
                try {
                    const response = await fetch(API);
                    if (!response.ok) {
                        throw new Error("Failed");
                    }
                    const {data} = await response.json();
                    setItems(data);
                } catch (e) {
                    console.log(e);
                }

            }
            getData()
        },
        [])
    return (
        <div>
            <ul>
                {items.map(item => {
                    return (<li key={item.id}>{item.name}</li>)
                })}
            </ul>
        </div>
    )
}