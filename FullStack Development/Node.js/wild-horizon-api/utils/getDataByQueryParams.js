export const getDataByQueryParams = (data, queryObj) => {
  const { continent, country, is_open_to_public } = queryObj;

  if (continent) {
    data = data.filter(destination => {
      return destination.continent.toLowerCase() === continent.toLowerCase();
    });
  }

  if (country) {
    data = data.filter(destination => {
      return destination.country.toLowerCase() === country.toLowerCase();
    });
  }

  if (is_open_to_public) {
    data = data.filter(destination => {
      return destination.is_open_to_public === JSON.parse(is_open_to_public.toLowerCase());
    });
  }
  return data;
};