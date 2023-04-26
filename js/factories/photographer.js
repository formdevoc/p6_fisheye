import PhotographerModel from "../models/photographer.js";
import PhotographerTemplate from "../templates/photographer.js";

/**
 * 
 */
export default class PhotographerFactory {
  constructor(data) {
    this._data = new PhotographerModel(data);

    return new PhotographerTemplate(this._data);
  }
}