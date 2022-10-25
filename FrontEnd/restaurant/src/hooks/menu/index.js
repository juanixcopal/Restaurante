import { useFetchGrupoMenu } from "./fetch-data.js"

export const useFetchInitMenu = () =>{
    const FetchGrupoMenu = useFetchGrupoMenu();
    return {FetchGrupoMenu};
}