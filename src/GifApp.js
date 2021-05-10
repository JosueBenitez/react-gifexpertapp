//import '@testing-library/jest-dom';
import React,{useState} from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export default function GifApp() {
    //const Categoria = ['One Puch','Dragon Ball','Naruto']
    const [Categoria, setCategoria] = useState(['Naruto']);
    /*const handAdd = ()=>{
        //setCategoria([...Categoria,'Bob Esponja'])
        setCategoria(cats=>[...cats,'Bob Esponja'])
    }*/
    return (
        <div>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory setCategoria={setCategoria}/>
            <ol>
                {Categoria.map(category=>(<GifGrid 
                key={category}
                categoria={category}/>)
                )
                }
            </ol>
        </div>
    )
}
