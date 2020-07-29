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
      <div class="card bg-dark text-white" id="card-${this.id}">
      <div class="card-header">
      <h3>&#10009; ${this.listTitle} &#10009;</h3>
      </div>
      <div class="card-body">
      <h5>&#9886; ${this.name} &#9887;</h5>
      <p>${this.notes}</p>
      <button type="submit" class="btn btn-danger btn-small" 
      id="${this.id}">&#9888;Delete This Strain&#9888;</button>
      </div>
      </div>
      `;
  }
}