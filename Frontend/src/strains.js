class Strains {
  constructor() {
    this.strains = [];
    this.adapter = new StrainAdapter();
    this.fetchAndLoadStrains();
    this.initBindingsAndEventListeners();
  }

  initBindingsAndEventListeners() {
    this.strainContainer = document.getElementById("savedStrains-container");
    this.newStrainName = document.querySelector(".form-group #strainName");
    this.newStrainNotes = document.querySelector(".form-group #strainNotes");
    this.dropdownContainer = document.querySelector(".form-control #ListControlSelect");
    this.cardForm = document.getElementById("strainForm");
    this.cardForm.addEventListener("submit", this.createCard.bind(this));
    this.strainContainer.addEventListener("click", e => this.deleteCard(e.target.id));
  }
}