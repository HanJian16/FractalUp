import { createStore } from "vuex";
import ICountry from "@/interfaces/ICountry";
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';
import { watch, Ref } from 'vue'

export interface State {
    countries: ICountry[],
    countriescopy: ICountry[],
    countriesEU: ICountry[],
    countriesAM: ICountry[],
    countriesAS: ICountry[],
    countriesOC: ICountry[],
    countriesAF: ICountry[],
}

const AddImage = async (countries: ICountry[]) => {
    const API_KEY = '44770252-a642c61fa7669e735d48c7715';
    const listCountries = [];

    for (let i = 0; i < countries.length; i++) {
        const country = countries[i].name;
        const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(country)}&image_type=photo`;

        try {
            const response = await fetch(url);
            const data = await response.json()
            if (data.hits && data.hits.length > 0) {
                const country = {
                    ...countries[i],
                    img: data.hits[0].webformatURL,
                }
                listCountries.push(country);
            }
        } catch (error) {
            console.error('Error en la solicitud: ', error);
        }
    }
    return listCountries;
}

const store = createStore<State>({
    state: {
        countries: [],
        countriescopy: [],
        countriesEU: [],
        countriesAM: [],
        countriesAS: [],
        countriesOC: [],
        countriesAF: [],
    },
    mutations: {
        setCountries(state, countries: ICountry[]) {
            state.countries = countries;
        },
        setCountriesCopy(state, countriescopy: ICountry[]) {
            state.countriescopy = countriescopy;
        },
        setCountriesEU(state, countriesEU: ICountry[]) {
            state.countriesEU = countriesEU;
        },
        setCountriesAM(state, countriesAM: ICountry[]) {
            state.countriesAM = countriesAM;
        },
        setCountriesAS(state, countriesAS: ICountry[]) {
            state.countriesAS = countriesAS;
        },
        setCountriesOC(state, countriesOC: ICountry[]) {
            state.countriesOC = countriesOC;
        },
        setCountriesAF(state, countriesAF: ICountry[]) {
            state.countriesAF = countriesAF;
        },
    },
    actions: {
        formatLists() {
            if (this.state.countries.length > 0) return;

            const GET_ITEMS = gql`
                query GetCountriesByContinent($continent: String) {
                    countries(filter: {continent: {eq: $continent }}) {
                        code
                        name
                        native
                        capital
                        emoji
                        currency
                        continent {
                            code
                            name
                        }
                        languages {
                            code
                            name
                        }
                    }
                }
            `;
            this.commit

            const { result: EU, loading: loadingEU } = useQuery(GET_ITEMS, { continent: "EU" })
            const { result: NA, loading: loadingNA } = useQuery(GET_ITEMS, { continent: "NA" })
            const { result: SA, loading: loadingSA } = useQuery(GET_ITEMS, { continent: "SA" })
            const { result: AS, loading: loadingAS } = useQuery(GET_ITEMS, { continent: "AS" })
            const { result: OC, loading: loadingOC } = useQuery(GET_ITEMS, { continent: "OC" })
            const { result: AF, loading: loadingAF } = useQuery(GET_ITEMS, { continent: "AF" })

            watch([loadingEU, loadingNA, loadingSA, loadingAS, loadingOC, loadingAF], async (values) => {
                if (!values.includes(true)) {


                    this.state.countriesEU = EU.value.countries;
                    this.state.countriesAS = AS.value.countries;
                    this.state.countriesOC = OC.value.countries;
                    this.state.countriesAF = AF.value.countries;
                    console.log(EU.value.countries)

                    this.state.countriesAM = [
                        ...NA.value.countries,
                        ...SA.value.countries,
                    ]
                    this.state.countriesAM.sort((a: ICountry, b: ICountry): number => a.name.localeCompare(b.name))

                    const responseEU = await AddImage(this.state.countriesEU)
                    const responseAM = await AddImage(this.state.countriesAM)
                    const responseAS = await AddImage(this.state.countriesAS)
                    const responseOC = await AddImage(this.state.countriesOC)
                    const responseAF = await AddImage(this.state.countriesAF)

                    this.commit('setCountriesEU', responseEU);
                    this.commit('setCountriesAM', responseAM);
                    this.commit('setCountriesAS', responseAS);
                    this.commit('setCountriesOC', responseOC);
                    this.commit('setCountriesAF', responseAF);

                    this.state.countries = [
                        ...this.state.countriesEU,
                        ...this.state.countriesAM,
                        ...this.state.countriesAS,
                        ...this.state.countriesOC,
                        ...this.state.countriesAF,
                    ]
                    this.state.countries.sort((a: ICountry, b: ICountry): number => a.name.localeCompare(b.name))

                    this.commit('setCountriesCopy', this.state.countries);
                }
            })

        },
        filterContinents(state, codes: Ref<string[]>) {
            this.state.countries = [];
            for (let i = 0; i < codes.value.length; i++) {
                switch (codes.value[i]) {
                    case 'EU':
                        this.state.countries.push(...this.state.countriesEU)
                        break;
                    case 'AM':
                        this.state.countries.push(...this.state.countriesAM)
                        break;
                    case 'AS':
                        this.state.countries.push(...this.state.countriesAS)
                        break;
                    case 'OC':
                        this.state.countries.push(...this.state.countriesOC)
                        break;
                    case 'AF':
                        this.state.countries.push(...this.state.countriesAF)

                }
            }

            if(codes.value.length == 0) this.state.countries = this.state.countriescopy

            this.state.countries.sort((a: ICountry, b: ICountry): number => a.name.localeCompare(b.name))
        },
        filterByInput(state, name: string) {
            this.state.countries = this.state.countriescopy.filter(country => {
                return country.name.toLowerCase().includes(name.toLowerCase())
            })
        },
        cleanListCountries() {
            this.state.countries = this.state.countriescopy;
        }
    },
    getters: {
        getTotalList(state): ICountry[] {
            return state.countries
        }
    }
})

export default store;