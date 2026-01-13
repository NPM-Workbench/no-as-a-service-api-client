/* node modules */
import { API_ROOT } from "../shared/index.js";
import { TAPIResponse } from "../types/index.js";

/* types */
type TOutput = TAPIResponse;

/* module */
async function getANo(): Promise<TOutput> {
  try {
    /* setup and fetch */
    const API_URL = `${API_ROOT}/no`;
    const response = await fetch(API_URL);

    /* check and end */
    if (!response.ok) {
      throw new Error("Get A No: Sorry, Something Went Wrong");
    } else {
      const { reason } = await response.json();
      return {
        code: "api-ok",
        message: "No errors encountered, check payload",
        payload: { reason }
      };
    }
  } catch (error) {
    console.error(error);
    return {
      code: "api-fail",
      message: "Something went wrong",
      payload: null,
    };
  }
}

/* exports */
export { getANo };
