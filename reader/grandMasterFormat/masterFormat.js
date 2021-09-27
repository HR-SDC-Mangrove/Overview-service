/* eslint-disable spaced-comment */
/* eslint-disable max-len */
const { createStyles } = require('./createStyles');
const { addPhotos } = require('./addPhotos');
const { addSkus } = require('./addSkus');
const { createProducts } = require('./createProducts');
const { createProductsWithFeatures } = require('./addFeatures');
const { combine } = require('./combine');
const { createFinal } = require('./createFinal');
// createStyles(98285, 98284, 0)
const styleRows = 1272245;
// 1958103 //1859947//1761760//1663703//1566019//1468560//1370411//1272245//1173688//1075995//977994//880994//783055//685200//587392//489448//391577//294260//196785//98285;
const styleMaxId = 1272244;
// 1958102//1859946//1761759//1663702//1566018//1468559//1370410//1272244//1173687//1075994//977993//880993//783054//685199//587391//489447//391576//294259//196784//98284;
const styleMinId = 1173688; //685194//685194//587389//489448//391577//294260//196785//98285; //0;
// addPhotos(284146, 284208, 0)
const photoRows = 3675246;
// 5000000//5000000//4805571//4523405//4242228//3958708//3675246//3390406//3108359//2825060//2545017//2262333//1979503//1996810//1414035//1121238//850554//568797; //284146;
const photoMaxId = 3675308;
// 5000062//5000062//4805633//4523467//4242290//3958770//3675308//3390468//3108421//2825122//2545079//2262395//1979565//1696872//1414097//1131300//850616//568859 //284208;
const photoMinId = 3390469;
// 4805634//4805634//4805634//4523468//4242182//3958771//3675309//3390469//3108422//2825123//2545080//2262398//1979547//1696873//1414098 //1131238//850617//568860////284208; //1;

const skuRows = 7355725;
// 11323918//10185555//9620328//9054614//8490740//7922736//7355725//6784993//6221130//5654524//5094364//4528805//3962505//3395939//2829593//2263637//1700190//1137065//566560;
const skuMaxId = 7355724;
// 11323917//10754001//10185554//9620327//9054613//8490739//7922735//7355724//6784992//6221129//5654523//5094363//4528804//3962504//3395938//2829592//2263636//1700189//1137064//566559;
const skuMinId = 6784993;
// 10754002//10185555//9620328//9054614//8490740//7922736//7355725//6784993//6221130//5654524//5094364//4528805//3962469//3395939//2829593 //2263637//1700190//1137065//566559;//0;

// addPhotos(284146, 284208, 0)
const createCompleteStyles = async () => new Promise((resolve) => {
  createStyles(styleRows, styleMaxId, styleMinId)
    .then((styleBool) => {
      if (styleBool) {
        console.log('created styles, adding photos ✅');
        addPhotos(photoRows, photoMaxId, photoMinId)
          .then((sPhotoBool) => {
            console.log('created styles with photos, adding skus ✅');
            if (sPhotoBool) {
              addSkus(skuRows, skuMaxId, skuMinId)
                .then((finalBool) => {
                  if (finalBool) {
                    resolve(true);
                  }
                });
            }
          });
      }
    })
    .catch((err) => { console.log(err); });
});

const productsRows = 650000;
const productStartId = 600001;
const productEndId = 650000;

const featuresRows = 1442854;
//2219279//2108594//1997535//1886545//1775623//1664928//1554084//1331814//1220882 /1109717 //998380//887588//776728//665891//555001//444066//333224//222309//111025//;

createCompleteStyles()
  .then((completedStyleBool) => {
    if (completedStyleBool) {
      console.log('completed styles, starting to create products...✅');
      createProducts(productsRows, productEndId, productStartId)
        .then((productBool) => {
          console.log('completed creating products, starting to create products with features...✅');
          if (productBool) {
            createProductsWithFeatures(featuresRows, productEndId, productStartId)
              .then((fBool) => {
                console.log('completed created products with features, starting combine of final products and completed styles...✅');
                if (fBool) {
                  combine().then((finalBool) => {
                    console.log('completed combine, starting to create final JSON...✅');
                    if (finalBool) {
                      createFinal();
                      console.log('completed final json...all done 🔥');
                    }
                  });
                }
              });
          }
        });
    }
  })
  .catch((err) => { console.log(err); });
