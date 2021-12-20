const getImage = (title, image) => {
  const elmImage = document.createElement("DIV");
  elmImage.style.backgroundImage = `url('${image}')`;

  const elmImageImg = document.createElement("IMG");
  elmImageImg.src = image;
  elmImageImg.alt = title;
  elmImage.appendChild(elmImageImg);

  return elmImage;
};

// products
(() => {
  const insertPorudcts = (parent, items) => {
    const setClass = (elm, value) =>
      (elm.className = [parent.className, value].join(""));

    items.forEach(({ title, image }) => {
      const elmItem = document.createElement("LI");
      setClass(elmItem, "__item");

      const elmImage = getImage(title, image);
      setClass(elmImage, "__image");
      elmItem.appendChild(elmImage);

      const elmTitle = document.createElement("H4");
      setClass(elmTitle, "__title");
      elmTitle.innerText = title;
      elmItem.appendChild(elmTitle);

      const elmLink = document.createElement("A");
      setClass(elmLink, "__link");
      elmLink.href = "#learn-more";
      elmLink.innerText = "Learn more";
      elmItem.appendChild(elmLink);

      parent.appendChild(elmItem);
    });
  };

  const parent = document.querySelector("#productList");
  const items = [
    {
      title: "Chevrolet Colorado",
      image: "/assets/img/product/colorado.jpeg",
    },
    {
      title: "Chevrolet Silverado 1500",
      image: "/assets/img/product/silverado-1500.jpeg",
    },
    {
      title: "Chevrolet Silverado 2500 HD",
      image: "/assets/img/product/silverado-2500hd.jpeg",
    },
    {
      title: "Chevrolet Silverado 3500 HD",
      image: "/assets/img/product/silverado-3500hd.jpeg",
    },
  ];
  insertPorudcts(parent, items);

  const parentVans = document.querySelector("#productListCans");
  const itemsVans = [
    {
      title: "Chevrolet Low \nCab Forward 4500",
      image: "/assets/img/product/cargo-van-low-cab-forward-4500.jpeg",
    },
    {
      title: "Chevrolet City Express \nCargo Van",
      image: "/assets/img/product/cargo-van-city-express.jpeg",
    },
    {
      title: "Chevrolet Express \nCargo Van",
      image: "/assets/img/product/cargo-van-express.jpeg",
    },
    {
      title: "Chevrolet Express \nCommercial Cutaway",
      image: "/assets/img/product/cargo-van-express-commercial-cutaway.jpeg",
    },
  ];
  insertPorudcts(parentVans, itemsVans);
})();

// services
(() => {
  const items = [
    {
      title: "Payne is Your \nBusiness Elite Dealer",
      image: "/assets/img/service/dealer.jpeg",
      description:
        "Payne Chevrolet is a Business Elite Dealer, which means we provide a range of services to help your business running smoothly. These include a dedicated dealer representative, extended service hours, and loaner vehicles. Your dealer representative will work with you to determine & become familiar with your personal business needs, and they’ll help you select the right vehicle for the jobs you need completed.",
    },
    {
      title: "Group & Association Incentives",
      image: "/assets/img/service/group.jpeg",
      description:
        "Chevrolet strives to give back to those who partner with us, which is why they offer special business association offers. If you are a member of the National Association of Home Builders, Associated Builder and Contractors, Inc. , or The Associated General Contractors of America, you can qualify for special offers & discounts when you buy an eligible Chevrolet for your business. If you’re ready to invest in a vehicle that will help your business, come to Henna Chevrolet to find the perfect Commercial vehicle or explore our Commercial Inventory online! If you have any additional questions regarding Commercial vehicles, contact our Chevy Commercial sales specialists today.",
    },
    {
      title: "Upfit & Accessory \nAssistance",
      image: "/assets/img/service/accessory.jpeg",
      description:
        "Depending on your individual business needs, you may need custom Upfit & accessories for your commercial vehicle. These will allow you to tailor a commercial vehicle perfectly to your business. Chevrolet also has Business Choice Offers, which are cash allowances on Upfits or Accessories for Commercial vehicles! In order to take advantage of these specials, you must use the vehicle for day-to-day operations, not just transportation.",
    },
  ];

  const parent = document.querySelector("#services");
  const setClass = (elm, value) =>
    (elm.className = [parent.className, value].join(""));

  items.forEach(({ title, image, description }) => {
    const elmItem = document.createElement("LI");
    setClass(elmItem, "__item");

    const elmImage = getImage(title, image);
    setClass(elmImage, "__image");
    elmItem.appendChild(elmImage);

    const elmTitle = document.createElement("H4");
    setClass(elmTitle, "__title");
    elmTitle.innerText = title;
    elmItem.append(elmTitle);

    const elmDescription = document.createElement("P");
    setClass(elmDescription, "__description");
    elmDescription.innerText = description;
    elmItem.append(elmDescription);

    parent.append(elmItem);
  });
})();
