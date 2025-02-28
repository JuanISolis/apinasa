

const BASE_URL = "https://images-api.nasa.gov/search?q=";

export const getPlanets = async () => {
    let api = await fetch(`${BASE_URL}PLANET&media_type=image`);
    let info = await api.json();
    return info;
}

export const getIdINF = async (id: string) => {
    let api = await fetch(`${BASE_URL}${id}&media_type=image`);
    let info = await api.json();
    return info;
}
