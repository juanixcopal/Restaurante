import { useEffect, useState } from "react"
import { getGrupoMenu } from "../../data/menu/get.js"



export const useFetchGrupoMenu = () =>{
    const [grupoMenu, setGrupoMenu] = useState([]);
    const [loadingGrupoMenu, setLoadingGrupoMenu] = useState(false);

    useEffect(()=> {
        (async()=>{
            setLoadingGrupoMenu(true);
            await getGrupoMenu()
            .then((result) => {
                console.log(result);
                setGrupoMenu(result)
              })
              .catch((error) => {
                console.log('error',error);
              })
              setLoadingGrupoMenu(false);
        })()
        return () => {}
    },[])

    return {grupoMenu, loadingGrupoMenu}
}