MasterForat Guide

please create csvs directory in reader/
please create json directory in reader/
please create finalJSON directory in reader/

it only works with my overview service data, so unless you intend on making a replica, youll have to use my function to get an idea of how to create your own.

if your trying to make a replica (to see how function is working), please download the following csvs at:
https://drive.google.com/drive/folders/1DVBMN1Uv_sG_WOflOCn79xRmCb0YJWmD?usp=sharing

else
   the general idea:

   -first off - my component relys on the following csvs:

  -->products
  -->features (associated with product id)
  -->styles(associated with product id)
  -->photos(associated with style id)
  -->skus(associated with style id)

masterformat runs createStyles
 - this creates 50k json objects of styles correlating to the input style begging/ending id

create styles resolves, then masterformat runs addPhotos
 - this reads the newly created styles.json and adds all the photos associated to the styles based on style id

addPhotos resolves, then masterformat runs addSkus
 - this reads the newly created stylesWithPhotos.json and adds all the sku data associated to the styles based on style_id

addSkus resolves, then masterformat runs createProducts
 - this creates an array of 50k JSON objects of products correlating to input begging/ending product id

create products resolves, then masterformat runs addFeatures
 - this reads the newly created products.json file and adds the features according to matching product id

 add features resolves, masterformat runs final script combine
   - combine reads completeStyles.json and productsWFeatures.json and adds each style object to the corresponding product id

 combine resolves and masterformat runs create final script
   - create final reads through they array in the finalProducts.json and writes them 1 by 1 to a new file in finalJSON (file name is based on what you title it, for me i chose to associate my files with 50k, 100k etc...)
   - this file is importable to mongo

thanks for checking this out!

cheers,
Rob

