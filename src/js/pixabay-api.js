import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '44825228-c925ad4267e8085ff76ea7430',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
  },
});

export async function getImage(image, currentPage) {
  const res = await axios.get('', {
    params: {
      q: image,
      page: currentPage,
    },
  });
  return res.data;
}
