const favoriteProduct = (async id => {
  // await fetch(`http://192.168.0.106:5000/products/favorite/${id}`, {
  await fetch(`https://miclo1.azurewebsites.net/products/favorite/${id}`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
});

export default favoriteProduct;