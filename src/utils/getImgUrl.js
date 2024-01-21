function getImgUrl(image) {
  return new URL(`../assets/img/tabbar/${image}`, import.meta.url).href
}

export default getImgUrl