import QSHrquest from "../request/index"

export function getHotSuggests() {
  return QSHrquest.get({
    url: "/home/hotSuggests"
  })
}