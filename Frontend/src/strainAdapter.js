class StrainAdapter {
  constructor() {
    this.baseURL = "http://localhost:3000/strains"
  }

  getStrains() {
    return fetch(this.baseURL)
    .then(res => res.json())
  }

  createStrain(name, notes, listId) {
    const strain = {
      name: name,
      notes: notes,
      list_id: listId
    }
    return fetch(this.baseURL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'content-type': 'application/json', 
      },
      body: JSON.stringify({ strain })
    })
    .then(res => res.json())
  }

  deleteStrain(id) {
    return fetch(`${this.baseURL}/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({"id": id})
    })
}

}