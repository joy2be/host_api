import BDXM_API_KEY from "./apikey.js";

export const getWeatherFromCoords = async (locationObj) => {
  try {
	  const url = buildApiCoordsUrl(locationObj);
	  return await getWeatherConditions(url);
  } catch (err) {
	  console.error(err.stack);
  }
};