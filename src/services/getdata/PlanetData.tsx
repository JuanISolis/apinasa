import { useEffect, useState } from 'react';
import {getIdINF} from '../apiservices/NasaServicio'

interface Props  {
    id:string;
}

export const PlanetData = ( {id} :Props) => {
    const [planet, setInfo] = useState<any[]>([]);

    const get = async () => {
        let data = await getIdINF(id);
        setInfo(data.collection.items);
    };

    useEffect(() => {
        get();
    }, [id]);

    const infplanet = planet.map((item: any) => ({
        id: item.data?.[0]?.nasa_id ?? "ID Desconocido",
        title: item.data?.[0]?.title ?? "Título no disponible",
        imageUrl: item.links?.[0]?.href ?? null,
        description: item.data[0].description || "No description available",
        additionalImages: item.links?.slice(1).map((link: any) => link.href) ?? [],
    }));
    

    return { infplanet };
};