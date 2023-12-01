import { reactive } from "vue"

export const beers = reactive({
    apriUrl: "https://api.openbrewerydb.org/v1/breweries?by_country=ireland&per_page=10",
    beersArr: [],
    selectedString: ""
});