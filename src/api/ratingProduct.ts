const ratingProduct = async (id: string, rating: number) => {
  // await fetch(`http://192.168.0.106:5000/products/rating/${id}`, {
  await fetch(`https://miclo1.azurewebsites.net/products/rating/${id}`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      rating
    }),
  });
};

export default ratingProduct;