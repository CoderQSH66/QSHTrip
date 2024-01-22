import QSHrquest from "../request/index"

// 获取热门建议数据
export function getHotSuggests() {
  return QSHrquest.get({
    url: "/home/hotSuggests"
  })
}

// 获取分类数据
export function getCategories() {
  return QSHrquest.get({
    url: "/home/categories"
  })
}

// 获取房源列表数据
export function getHouseList(currentPage) {
  return QSHrquest.get({
    url: "/home/houselist",
    params: {
      page: currentPage
    }
  })
}