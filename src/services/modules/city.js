import QSHrequest from "@/services/request"

export function getAllCity() {
  return QSHrequest.get({
    url: "/city/all"
  })
}