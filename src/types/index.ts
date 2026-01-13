export type TAPIResponse = {
  code: "api-ok" | "api-fail",
  message: string,
  payload: null | {
    reason: string
  }
}
