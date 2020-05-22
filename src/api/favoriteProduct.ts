const favoriteProduct = (async (productId: string, deviceId: string) => {
  // await fetch(`http://192.168.0.106:5000/product-favorite/${productId}`, {
  await fetch(`https://miclo1.azurewebsites.net/product-favorite/${productId}`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      deviceId
    }),
  });
});

export default favoriteProduct;