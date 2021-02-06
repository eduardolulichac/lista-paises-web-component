export class countryApi {
  constructor() {
    this.data = this.fetchData('https://restcountries.eu/rest/v2/lang/es');
  }

  async fetchData(urlApi) {
    try {
      const result = await fetch(urlApi);
      return await result.json();
    } catch (error) {
      console.log(error);
      console.log('hubo un error en el servicio');
      return [];
    }
  }
}
