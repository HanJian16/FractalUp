interface ILanguage {
    code?: string,
    name: string,
}

interface IContinent {
    code: string,
    name: string,
}

export interface ICountry {
    capital?: string,
    code: string,
    currency?: string,
    emoji?: string,
    languages: ILanguage[],
    name: string,
    native?: string,
    img: string,
    continent: IContinent,
}

export default ICountry;