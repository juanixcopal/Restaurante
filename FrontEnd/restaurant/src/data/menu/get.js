import axios from "axios";

export const getGrupoMenu = async () =>{

   return await axios.get(`http://localhost:3050/comida/grupocomida`)
      .then(({data}) => {
        return data 
      })
      .catch(({response}) => {
        throw response
      })

}