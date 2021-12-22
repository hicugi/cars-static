const templateMount = (id, items, itemMountFn = () => {}) => {
  const elmList = document.querySelector(`#${id}`);
  const template = document.querySelector(`#${id}Template`).content;

  items.forEach((item) => {
    const elm = template.cloneNode(true).querySelector("*");

    let content = elm.innerHTML;

    Object.entries(item).forEach(([key, value]) => {
      const rgx = new RegExp(`{{\\s*${key}\\s*}}`, "g");
      content = content.replace(rgx, value);
    });

    elm.innerHTML = content;

    elmList.appendChild(elm);

    if (itemMountFn) {
      itemMountFn(elm, item);
    }
  });
};
