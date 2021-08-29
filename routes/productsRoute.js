const {db} = require('../database.js');
module.exports = {
  products: (req, res) => {
    // console.log(db)
    let productId = Number(req.url.split('=')[1]);
    let newNum = productId + 5;

    Promise.all([
      db.any('select * from products where product_id between $1 and $2', [productId, newNum]),
      db.any('select * from styles where productId=$1', [productId]),
    ])
      .then((results) => {
        const products = results[0];
        const styles = results[1];
        let createStyle = async () => {
          let styleId;
          styles.forEach((style) => {
            Promise.all([
              db.any('select * from photos where styleId=$1', [style.id]),
              db.any('select * from skus where styleId=$1', [style.id]),
            ])
              .then(photoAndSku => {
                console.log(photoAndSku)
                let finalPhotos = photoAndSku[0].slice();
                // finalPhotos = finalPhotos.map((photoData) => {
                //   let newData = {
                //     thumbnail_url: photoData.thumbnail_url,

                //   }
                // })
                finalPhotos = finalPhotos.map((photoData) => {
                  let newData = {
                    thumbnail_url: photoData.thumbnail_url,

                  }
                })

                console.log(finalPhotos)
                //
                const finalPhotosAndSkus = [];


              })
              .catch(err => {
                console.log('wassupp error in your query 😪');
              })
          })
          console.log(styles, "🔥")
        }

        createStyle().then(() => {
          res.send(200);
        });
      })
      .catch((err) => {
        console.log(err);
        res.send(400);
      });
    //  db.any('select * from products where product_id between $1 and $2', [productId, newNum])
  },
};
