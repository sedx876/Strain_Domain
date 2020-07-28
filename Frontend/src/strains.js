class Strains{
  constructor(){
    this.strains = [];
    this.adapter = new StrainAdapter();
    this.fetchAndLoadStrains();
    this.initBindingsAndEventListeners();
  }

  initBindingsAndEventListeners() {
    this.strainContainer = document.getElementById("savedStrains-container"); 
    this.newStrainName = document.querySelector(".form-group #strainName");
    this.newStrainNotes = document.querySelector(".form-group #strainNotes");
    this.dropdownContainer = document.querySelector(".form-group #ListControlSelect");
    this.cardForm = document.getElementById("strainForm");
    this.cardForm.addEventListener("submit", this.createCard.bind(this));
    this.strainContainer.addEventListener('click', e => this.deleteCard(e.target.id))
  }

  deleteCard(id) {
      this.adapter.deleteStrain(id).then(function(){
          let cardDiv = document.getElementById("card-" + id);
          cardDiv.parentElement.removeChild(cardDiv)
      })
      this.strains.forEach(i => {
          this.strains.splice(i, 1)
      })
  }

  createCard(e) {
    e.preventDefault();
    const name = this.newStrainName.value;
    const notes = this.newStrainNotes.value;
    const listId = this.dropdownContainer.value;
    this.adapter.createStrain(name, notes, listId).then(strain => {
        this.strains.push(new Strain(strain.data));
        this.newStrainName.value = '';
        this.newStrainNotes.value = '';
        
        this.render();
    });
  }

  fetchAndLoadStrains(){
    this.adapter 
    .getStrains()
    .then(strains => {
        strains.data.forEach(strain =>
          this.strains.push(new Strain(strain))
      );
    })
    .then(() => {
        this.render();
    });
  }

  render() {
      this.strainContainer.innerHTML = this.strains 
      .map(strain => strain.renderCard())
      .join("");
  }
}