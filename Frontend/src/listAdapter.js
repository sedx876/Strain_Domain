class ListAdapter {
  constructor() {
    this.baseURL = "http://localhost:3000/lists"
  }

  getLists() {
    return fetch(this.baseURL)
    .then(res => res.json())
  }
}