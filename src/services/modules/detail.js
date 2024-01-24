import QSHrquest from "../request"

export function getDetailInfos(houseId) {
  return QSHrquest.get({
    url: "/detail/infos",
    params: {
      houseId
    }
  })
}