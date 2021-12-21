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
  insertPorudcts(parent, productListItems);

  const parentVans = document.querySelector("#productListCans");
  insertPorudcts(parentVans, productListCansItems);
})();

// services
(() => {
  const parent = document.querySelector("#services");
  const setClass = (elm, value) =>
    (elm.className = [parent.className, value].join(""));

  serviceItems.forEach(({ title, image, description }) => {
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
