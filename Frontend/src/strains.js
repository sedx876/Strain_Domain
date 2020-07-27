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

  fetchAndLoadStrains() {
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
}