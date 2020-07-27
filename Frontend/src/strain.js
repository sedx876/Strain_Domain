class Strain{
  constructor(strainJSON) {
    this.name = strainJSON.attributes.name
    this.notes = strainJSON.attributes.notes
    this.id = strainJSON.id
    this.listTitle = strainJSON.attributes.list.title
    this.listId = strainJSON.attributes.list.id
  }

  renderCard(){
      return `
      <div class="card bg-success text-white" id="card-${this.id}">
      <div class="card-header">
      <h3>${this.listTitle}</h3>
      </div>
      <div class="card-body">
      <h5>${this.name}</h5>
      <p>${this.notes}</p>
      <button type="submit" class="btn btn-danger btn-small" 
      id="${this.id}">Delete This Strain</button>
      </div>
      </div>
      `;
  }
}