var asyncAdd = (a, b) =>
{
  return new Promise((resolve, reject) =>
  {
    setTimeout(() =>
    {
      if(typeof a === 'number' && typeof b ==='number')
      {
        resolve(a+b);
      }
      else
      {
          reject('Arguments must be numbers');
      }
    })
  });
};

asyncAdd(5, '7').then((res) =>{
  console.log('result: ', res);
  return asyncAdd(res, 33);
}).then((res) =>
{
  console.log('Should be 45', res);
}).catch((errorMessage) =>
{
  console.log(errorMessage);
});

var somePromise = new Promise((resolve, reject) =>
  {
    setTimeout(() =>
      {
        //resolve('hey, it worked');
        reject('unable to fulfill promise');
      }, 2500);
  });

somePromise.then((message) =>
  {
    console.log('success!', message);
  }, (errorMessage) =>
  {
    console.log('Error: ', errorMessage);
  });
