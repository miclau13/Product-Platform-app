const ratingProduct = async (id: string, deviceId: string, rating: number) => {
  // await fetch(`http://192.168.0.106:5000/product-rating/${id}`, {
  await fetch(`https://miclo1.azurewebsites.net/product-rating/${id}`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      rating,
      deviceId
    }),
  });
};

export default ratingProduct;