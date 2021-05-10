import React /*, {useState, useEffect}*/ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem,';

export const GifGrid = ({categoria}) => {
    //const [Count, setCount] = useState(0)
    const {data:imagenes,loading} = useFetchGifs(categoria);
    
    /*const [imagenes, setimagenes] = useState([])
    useEffect(()=>{
        getGifs(categoria).then(imgs=>setimagenes(imgs))
    },[categoria])*/
    
    //getGifs();  
    return (
        <>
            <h3 className="animate__animated animate__fadeInDown">{categoria}</h3>
            {loading &&<p className=" animate__animated animate__flash">Cargando...</p>}
            <div className="card-grid">
                {
                        imagenes.map(img=>{
                        return( <GifGridItem {...img} key={img.id} />)
                    })  
                }
            </div>
        </>
    )
}
