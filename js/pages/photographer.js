import PhotographerFactory from "../factories/photographer.js";
import PhotographerService from "../services/photographer.js";
import MediaFactory from "../factories/media.js";
import MediaService from "../services/media.js";
import Components from "../templates/components.js";
import Utils from "../utils/index.js";

class App {
  displayData(photographer, mediaList) {
    const photographerMain = document.querySelector("#main");
    const photographerBanner = document.querySelector(".photographer-banner");
    const photographerMedia = document.querySelector(".photographer-gallery");

    const photographerTemplate = new PhotographerFactory(photographer);

    document.title = photographerTemplate.UserTitleDOM();
    photographerBanner.innerHTML = photographerTemplate.UserBannerDOM();
    photographerBanner.insertAdjacentHTML("beforeend", photographerTemplate.UserInsertDOM());

    mediaList.map(media => {
      const mediaTemplate = new MediaFactory(media);
      photographerMedia.innerHTML += mediaTemplate.MediaCardDOM();
    });

    photographerMedia.insertAdjacentHTML("beforebegin", Components.SortByDropdownDOM());
    photographerMain.insertAdjacentHTML("afterend", Components.ContactFormDOM(photographer.name));
    photographerMain.insertAdjacentHTML("afterend", Components.LightBoxDOM());
  }

  async init() {
    const URLSearchParams = new URL(window.location.href).searchParams;
    const id = URLSearchParams.get("id");

    const photographer = await PhotographerService.getPhotographerById(id);
    const media = await MediaService.getMediaByPhotographerId(id);

    this.displayData(photographer, media);

    Utils.handler();
  }
}

const app = new App();
app.init();