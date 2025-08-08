import { api } from "../backVeterinaria";

export async function getApi(tipo:string,id:string = '') {
    try {
        const solicitud = await fetch(`${api}/${tipo}/${id}`);
        if (!solicitud.ok) throw new Error('error en la validacion de datos');
        const respuesta = await solicitud.json();
        return respuesta
    } catch (error) {
        return error
    }
        
}
export async function updateOnly(campo:string,registro : string,tipo:string,id:number) {
    try {
        const solicitud = await fetch(`${api}/${tipo}/${id}`,
            {
                method:'PATCH',
                headers:{
                    'content-Type': 'application/json'
                },
                body: JSON.stringify({
                    [campo]:registro
                })
            }
        )
            if (!solicitud.ok) throw new Error('error al actualizar')

            const data = solicitud.json();
        console.log('Actualizado exitosamente');
    return data;
        
    } catch (error) {
        console.error('error en actualizar')
        return null
    }
}
