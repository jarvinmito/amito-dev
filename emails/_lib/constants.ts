export const BASE_URL = "https://assets.amito.dev";
export const GET_CLIENT_ASSETS = (name: string) => {
  const CLIENT_FOLDER = `${BASE_URL}/portfolio/${name}`;
  const CLIENT_FONTS = `${CLIENT_FOLDER}/fonts`;
  const CLIENT_IMAGES = `${CLIENT_FOLDER}/images`;
  return { CLIENT_FOLDER, CLIENT_FONTS, CLIENT_IMAGES };
};

export const COMMON_FOLDER = `${BASE_URL}/common`;
export const COMMON_FONTS = `${COMMON_FOLDER}/fonts`;
export const COMMON_IMAGES = `${COMMON_FOLDER}/images`;
