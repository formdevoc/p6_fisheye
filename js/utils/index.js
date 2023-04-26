import Subject from "./subject.js";
import ContactFormUtils from "./contactForm.js";
import SortByUtils from "./sortBy.js";
import LightBoxUtils from "./lightBox.js";
import LikesUtils from "./likes.js";

export default class Utils {
  static handler() {
    const gallery = [ ...document.querySelectorAll("[data-id]") ];

    const subject = new Subject();
    const contactFormUtils = new ContactFormUtils("#contact");
    const sortByUtils = new SortByUtils(gallery);
    const lightBoxUtils = new LightBoxUtils("#lightbox", gallery);
    const likesUtils = new LikesUtils();

    subject.attach(contactFormUtils);
    subject.attach(sortByUtils);
    subject.attach(lightBoxUtils);
    subject.attach(likesUtils);
    subject.notify();
  }
}