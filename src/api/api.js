class Api {
  constructor(config) {
    this._baseUrl = config.baseUrl;
  }

  getCards() {
    return fetch(`${this._baseUrl}beers`).then((res) =>
      res.ok ? res.json() : Promise.reject(res.status)
    );
  }

  getCardById(id) {
    return fetch(`${this._baseUrl}beers/${id}`).then((res) =>
      res.ok ? res.json() : Promise.reject(res.status)
    );
  }
}

const api = new Api({
  baseUrl: "https://api.punkapi.com/v2/",
});

export default api;
