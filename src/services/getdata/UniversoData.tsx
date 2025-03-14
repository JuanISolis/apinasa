import { useEffect, useState } from 'react';
import {getPlanets} from '../apiservices/NasaServicio'

export const UniversoData = () => {
    const [universe, setPlanets] = useState<any[]>([]);

    const get = async () => {
        let {collection:{items}} = await getPlanets();
        setPlanets(items);
    };

    useEffect(() => {
        get();
    }, []);

    const universo = universe.map((item: any) => ({
        id: item.data?.[0]?.nasa_id ?? "ID Desconocido",
        title: item.data?.[0]?.title ?? "Título no disponible",
        imageUrl: item.links?.[0]?.href ?? null
    }));
    

    return { universo };
};
