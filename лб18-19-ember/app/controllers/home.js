import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class HomeController extends Controller {
  @action
  handleClick() {
    const images = [
      { src: "https://w.forfun.com/fetch/0e/0e26b1b65946ee36fac9605ae67e4ac8.jpeg", alt: "собака, собачка, песик" },
      { src: "https://media.istockphoto.com/id/104355461/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B2%D0%B8%D0%B4-%D1%81%D0%BF%D0%B5%D1%80%D0%B5%D0%B4%D0%B8-%D0%B1%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F-%D0%B0%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F-%D0%BA%D0%BE%D1%80%D0%BE%D1%82%D0%BA%D0%BE%D1%88%D1%91%D1%80%D1%81%D1%82%D0%BD%D0%B0%D1%8F-%D0%BA%D0%BE%D1%88%D0%BA%D0%B0-7-%D0%BC%D0%B5%D1%81%D1%8F%D1%86%D0%B5%D0%B2-%D1%81%D0%B8%D0%B4%D1%8F.jpg?s=612x612&w=0&k=20&c=tHDoLbkg2ESuqR6LiK_-GCPzqdlWaqr64mgTRRwdEz0=", alt: "кот, кошка, мяу" },
      { src: "https://avatars.mds.yandex.net/i?id=3d19ef2b541326819d92ceb92b9b945d09f836f5-4365707-images-thumbs&n=13", alt: "кабан" },
    ];

    let quess = document.querySelector(".quess-text").value;

    if (quess) {
      let currentImage = document.querySelector(".quess-image");
      let currentImageIndex = images.findIndex((image) => image.src === currentImage.getAttribute("src"));

      if (currentImage.getAttribute("alt").toLowerCase().includes(quess.toLowerCase())) {
        alert("Правильно!");
      } else {
        alert("Неверно");
      }

      let nextImageIndex = (currentImageIndex + 1) % images.length;
      let nextImage = images[nextImageIndex];

      currentImage.setAttribute("src", nextImage.src);
      currentImage.setAttribute("alt", nextImage.alt);
    } else {
      alert("Пустое поле!");
    }
  }
}
