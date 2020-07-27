class StrainAdapter {
  constructor() {
    this.baseURL = "http://localhost:3000/strains"
  }

  getStrains() {
    return fetch(this.baseURL)
    .then(res => res.json())
  }
}