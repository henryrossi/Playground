import AbstractView from "./AbstractView.js";

export default class HoverEffects extends AbstractView {
  constructor() {
    super();
  }

  render(props) {
    this.setTitle("Hover Effects");

    const page = document.createElement("div");
    page.classList.add("hover-effects-page");

    // Lily Effect
    const lilyContainer = document.createElement("div");
    lilyContainer.classList.add("lily-effect");
    page.appendChild(lilyContainer);
    const lilyImg = document.createElement("img");
    lilyImg.src = "../src/images/fall-pond.jpg";
    lilyContainer.appendChild(lilyImg);
    const lilyTitle = document.createElement("h2");
    lilyTitle.textContent = "Nice ";
    const lilyTitleBold = document.createElement("span");
    lilyTitleBold.textContent = "Lily";
    lilyTitle.appendChild(lilyTitleBold);
    lilyContainer.appendChild(lilyTitle);
    const lilyDescription = document.createElement("p");
    lilyDescription.textContent = "Lily likes to play with crayons and pencils";
    lilyContainer.appendChild(lilyDescription);

    // Sadie Effect
    const sadieContainer = document.createElement("div");
    sadieContainer.classList.add("sadie-effect");
    page.appendChild(sadieContainer);
    const sadieImg = document.createElement("img");
    sadieImg.src = "../src/images/fall-pond.jpg";
    sadieContainer.appendChild(sadieImg);
    const sadieTitle = document.createElement("h2");
    sadieTitle.textContent = "Holy ";
    const sadieTitleBold = document.createElement("span");
    sadieTitleBold.textContent = "Sadie";
    sadieTitle.appendChild(sadieTitleBold);
    sadieContainer.appendChild(sadieTitle);
    const sadieDescription = document.createElement("p");
    sadieDescription.textContent = "Sadie never took her eyes off me. She had a dark soul.";
    sadieContainer.appendChild(sadieDescription);

    return page;
  }
}
