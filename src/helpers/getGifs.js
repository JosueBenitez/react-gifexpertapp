export const getGifs= async(categoria)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=fEu1ViWrnlyjbLfiGI9i0OgjbbAq5pgl`;
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();
    console.log(data);
    const gifs = data.map(img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    })
    //console.log(gifs)
    return gifs;
}