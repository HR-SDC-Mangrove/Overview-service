/* eslint-disable max-len */
const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe, it } = require('mocha');
// eslint-disable-next-line no-unused-vars
const server = require('../service/index');
// const helper = require('../routes/helper');

const { expect } = chai;
const { db } = require('../database/database');

chai.use(chaiHttp);

describe('database', () => {
  describe('product data', () => {
    describe('database contains correct transformed data', () => {
      describe('products', () => {
        it('should contain the correct product data based on product_id - for id 1', async () => {
          const inputId = 1;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Camo Onesie');
          expect(currentProduct.slogan).to.equal('Blend in to your crowd');
          expect(currentProduct.description).to.equal('The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.');
          expect(currentProduct.category).to.equal('Jackets');
          expect(currentProduct.default_price).to.equal('140');
        });
        it('should contain the correct product data based on product_id - for id 50000', async () => {
          const inputId = 50000;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Brionna Jacket');
          expect(currentProduct.slogan).to.equal('Ducimus et rem eos.');
          expect(currentProduct.description).to.equal('Odio architecto dignissimos nihil eum possimus et id quia commodi. Ducimus quod vel exercitationem eaque minus sunt molestiae deserunt voluptatum. Nisi omnis modi culpa. Repellendus autem aut hic vel. Est nulla totam ipsam veritatis cum aut.');
          expect(currentProduct.category).to.equal('Jacket');
          expect(currentProduct.default_price).to.equal('604');
        });
        it('should contain the correct product data based on product_id - for id 50001', async () => {
          const inputId = 50001;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Valentina Shorts');
          expect(currentProduct.slogan).to.equal('Quia aut qui vel aliquid ab amet nobis eius debitis.');
          expect(currentProduct.description).to.equal('Sunt voluptatem non maxime dolores quo ut. Qui itaque est sed assumenda molestiae laboriosam saepe. Officia cupiditate fugit.');
          expect(currentProduct.category).to.equal('Shorts');
          expect(currentProduct.default_price).to.equal('272');
        });
        it('should contain the correct product data based on product_id - for id 100000', async () => {
          const inputId = 100000;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Furman Hat');
          expect(currentProduct.slogan).to.equal('Labore eligendi delectus odio reprehenderit quaerat sunt voluptas.');
          expect(currentProduct.description).to.equal('Eaque harum delectus a corrupti ut. Quisquam dicta quo ex ut voluptas. Et et at culpa aperiam asperiores provident porro temporibus deserunt. Ab labore ullam iste.');
          expect(currentProduct.category).to.equal('Hat');
          expect(currentProduct.default_price).to.equal('371');
        });
        it('should contain the correct product data based on product_id - for id 100001', async () => {
          const inputId = 100001;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Joelle Boots');
          expect(currentProduct.slogan).to.equal('Unde quibusdam quisquam officia.');
          expect(currentProduct.description).to.equal('Molestias et at consequatur consequuntur impedit. Aut rerum et adipisci porro. Quo aut facilis nihil. Sed tenetur dolor assumenda quaerat. Magnam nostrum necessitatibus voluptatum porro quia eos blanditiis. Provident vitae ea.');
          expect(currentProduct.category).to.equal('Boots');
          expect(currentProduct.default_price).to.equal('769');
        });
        it('should contain the correct product data based on product_id - for id 150000', async () => {
          const inputId = 150000;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Shakira Sweater');
          expect(currentProduct.slogan).to.equal('Dolorem modi ducimus voluptates odio eum dolore explicabo.');
          expect(currentProduct.description).to.equal('Incidunt dolores quisquam error quidem non sit sequi. In explicabo quidem. Vel quisquam aut deserunt laboriosam non. Ullam totam inventore deserunt laboriosam consequatur magnam. Cupiditate voluptas veritatis voluptas occaecati iste et.');
          expect(currentProduct.category).to.equal('Sweater');
          expect(currentProduct.default_price).to.equal('150');
        });
        it('should contain the correct product data based on product_id - for id 150001', async () => {
          const inputId = 150001;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Hadley Sweatpants');
          expect(currentProduct.slogan).to.equal('Cum amet optio eos.');
          expect(currentProduct.description).to.equal('Perferendis sit commodi. Dolorem sed accusantium. Dolore vel aut et. Eum et nesciunt neque quis dolore et magni consequuntur.');
          expect(currentProduct.category).to.equal('Sweatpants');
          expect(currentProduct.default_price).to.equal('242');
        });
        it('should contain the correct product data based on product_id - for id 200000', async () => {
          const inputId = 200000;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('The Kaleigh Slacks');
          expect(currentProduct.slogan).to.equal('Qui soluta consequuntur.');
          expect(currentProduct.description).to.equal('Quas quisquam quis laudantium nostrum quaerat labore aut sunt debitis. Enim rem ipsum odio inventore non necessitatibus nemo et nobis. Et nihil commodi sunt earum perspiciatis. Sit tenetur soluta rerum eos aut consequatur. Illo ipsam molestiae at consequatur. Eum et et libero.');
          expect(currentProduct.category).to.equal('Slacks');
          expect(currentProduct.default_price).to.equal('927');
        });
        it('should contain the correct product data based on product_id - for id 200001', async () => {
          const inputId = 200001;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Raheem Cap');
          expect(currentProduct.slogan).to.equal('Omnis consequatur quis.');
          expect(currentProduct.description).to.equal('Reiciendis autem ab sint dolor autem sunt quis nihil. Dolor maiores et fugiat eius et modi est modi. Voluptatem non debitis impedit expedita animi qui odit a blanditiis.');
          expect(currentProduct.category).to.equal('Cap');
          expect(currentProduct.default_price).to.equal('909');
        });
        it('should contain the correct product data based on product_id - for id 250000', async () => {
          const inputId = 250000;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Lempi Shirt');
          expect(currentProduct.slogan).to.equal('Doloribus ab facere nam qui.');
          expect(currentProduct.description).to.equal('Molestiae quaerat soluta sed reprehenderit. Sit tempora quis quibusdam ut quo. Facere eveniet repellat. Hic nisi possimus et illo sed recusandae repudiandae pariatur. Quod voluptatem sed commodi omnis provident aliquam alias quod est.');
          expect(currentProduct.category).to.equal('Shirt');
          expect(currentProduct.default_price).to.equal('174');
        });
        it('should contain the correct product data based on product_id - for id 250001', async () => {
          const inputId = 250001;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Eino Shirt');
          expect(currentProduct.slogan).to.equal('Quo deleniti est ut ut nesciunt aut.');
          expect(currentProduct.description).to.equal('Inventore illo dignissimos ipsum ipsa. Explicabo praesentium corporis qui qui et doloremque commodi sit. Id aspernatur iusto rerum quo quo eos incidunt.');
          expect(currentProduct.category).to.equal('Shirt');
          expect(currentProduct.default_price).to.equal('212');
        });
        it('should contain the correct product data based on product_id - for id 300000', async () => {
          const inputId = 300000;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Pedro Skirt');
          expect(currentProduct.slogan).to.equal('Ut aut deserunt sed aliquam quasi.');
          expect(currentProduct.description).to.equal('Excepturi nulla beatae magni nesciunt. Dolorem autem placeat voluptatem laboriosam fugit ut vel aut quidem. Aut non suscipit ipsam aut saepe laboriosam velit esse. Quia velit quo ad aperiam molestiae.');
          expect(currentProduct.category).to.equal('Skirt');
          expect(currentProduct.default_price).to.equal('145');
        });
        it('should contain the correct product data based on product_id - for id 300001', async () => {
          const inputId = 300001;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Adeline Heels');
          expect(currentProduct.slogan).to.equal('Praesentium corrupti totam amet repellat.');
          expect(currentProduct.description).to.equal('Eos quas illo. In qui error unde totam eaque. Sit et quisquam doloremque. Est ea nulla. Quae quasi et omnis autem deserunt molestias et.');
          expect(currentProduct.category).to.equal('Heels');
          expect(currentProduct.default_price).to.equal('997');
        });
        it('should contain the correct product data based on product_id - for id 350000', async () => {
          const inputId = 350000;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Madisen Jacket');
          expect(currentProduct.slogan).to.equal('Quasi sed natus est sit accusamus esse ducimus fugiat.');
          expect(currentProduct.description).to.equal('Itaque ad expedita minima veniam sed dolorem omnis dolorum necessitatibus. Quae repellat optio ad. Officiis et laboriosam possimus et voluptas soluta cumque cumque. At dicta tempore blanditiis pariatur sint et omnis est enim. Asperiores quidem accusamus voluptate enim.');
          expect(currentProduct.category).to.equal('Jacket');
          expect(currentProduct.default_price).to.equal('283');
        });
        it('should contain the correct product data based on product_id - for id 350001', async () => {
          const inputId = 350001;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Tobin Shorts');
          expect(currentProduct.slogan).to.equal('Tenetur explicabo qui esse omnis deleniti dolorem.');
          expect(currentProduct.description).to.equal('Rem nesciunt architecto. Est nihil omnis odit. Autem minus officiis aut. Doloribus at saepe pariatur voluptate. Asperiores rerum nulla quas repudiandae nulla.');
          expect(currentProduct.category).to.equal('Shorts');
          expect(currentProduct.default_price).to.equal('146');
        });
        it('should contain the correct product data based on product_id - for id 400000', async () => {
          const inputId = 400000;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Vernie Slacks');
          expect(currentProduct.slogan).to.equal('Iusto iste porro enim ab autem consequatur nostrum.');
          expect(currentProduct.description).to.equal('Itaque sit illum sunt totam cumque vel ratione repudiandae. Quibusdam voluptatem et aperiam. Nesciunt nihil deserunt earum vel et. Quidem alias quod vel dolorem.');
          expect(currentProduct.category).to.equal('Slacks');
          expect(currentProduct.default_price).to.equal('379');
        });
        it('should contain the correct product data based on product_id - for id 400001', async () => {
          const inputId = 400001;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Haylie Trousers');
          expect(currentProduct.slogan).to.equal('Fuga officia velit fugiat voluptatum dicta dolor aperiam cum necessitatibus.');
          expect(currentProduct.description).to.equal('Hic voluptatibus unde amet iste quasi et consequatur facilis sit. Ipsam commodi a corrupti sed dolores. Provident in aperiam voluptatibus quod. Consequatur est et mollitia rem pariatur velit delectus.');
          expect(currentProduct.category).to.equal('Trousers');
          expect(currentProduct.default_price).to.equal('767');
        });
        it('should contain the correct product data based on product_id - for id 450000', async () => {
          const inputId = 450000;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Quincy Skirt');
          expect(currentProduct.slogan).to.equal('Qui nihil recusandae et voluptate libero labore id voluptatem.');
          expect(currentProduct.description).to.equal('Aliquid maiores non. Fugiat molestiae consectetur aliquam dolorem quasi minima tenetur. Accusamus accusantium reprehenderit velit ipsam et voluptate incidunt quia. Consequatur sed sed voluptate dolores eum. Omnis delectus doloribus dolorem nemo omnis pariatur reiciendis ullam. Excepturi possimus id minima.');
          expect(currentProduct.category).to.equal('Skirt');
          expect(currentProduct.default_price).to.equal('848');
        });
        it('should contain the correct product data based on product_id - for id 450001', async () => {
          const inputId = 450001;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Talia Coat');
          expect(currentProduct.slogan).to.equal('Nesciunt ex et vel odit aut vel et quia voluptas.');
          expect(currentProduct.description).to.equal('Nesciunt eum laborum consequatur velit et soluta velit. Omnis eius labore qui harum adipisci deleniti nihil excepturi. Ad et alias repudiandae ipsum. Sunt ad distinctio assumenda officiis. Perspiciatis laborum eveniet aut.');
          expect(currentProduct.category).to.equal('Coat');
          expect(currentProduct.default_price).to.equal('442');
        });
        it('should contain the correct product data based on product_id - for id 500000', async () => {
          const inputId = 500000;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Edythe 0 Trousers');
          expect(currentProduct.slogan).to.equal('Cupiditate amet debitis laboriosam.');
          expect(currentProduct.description).to.equal('Cum placeat saepe molestiae maxime saepe. Nemo illum nemo aut incidunt eveniet. Odio voluptatum sapiente totam.');
          expect(currentProduct.category).to.equal('Trousers');
          expect(currentProduct.default_price).to.equal('447');
        });
        it('should contain the correct product data based on product_id - for id 500001', async () => {
          const inputId = 500001;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Aida Suit');
          expect(currentProduct.slogan).to.equal('Quis eum dolores magnam dolorem ut et.');
          expect(currentProduct.description).to.equal('Velit fuga magnam esse sapiente ipsum. Dolores iste qui. Itaque sunt eligendi ducimus ut consequatur nulla libero.');
          expect(currentProduct.category).to.equal('Suit');
          expect(currentProduct.default_price).to.equal('66');
        });
        it('should contain the correct product data based on product_id - for id 550000', async () => {
          const inputId = 550000;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Orin 0 Heels');
          expect(currentProduct.slogan).to.equal('Sequi et quisquam laudantium repellat.');
          expect(currentProduct.description).to.equal('Delectus id unde sequi quasi tenetur cumque temporibus. Et ea expedita quia autem. Corrupti sit eum asperiores ut ut quisquam suscipit consectetur assumenda. Consequatur fugit sapiente sunt fugit tenetur sunt. Quo eum facilis sint enim ut ut. Voluptas voluptas accusantium molestias sit in illum sed repellendus.');
          expect(currentProduct.category).to.equal('Heels');
          expect(currentProduct.default_price).to.equal('64');
        });
        it('should contain the correct product data based on product_id - for id 550001', async () => {
          const inputId = 550001;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Korbin Pants');
          expect(currentProduct.slogan).to.equal('Illo ut culpa itaque necessitatibus harum molestiae.');
          expect(currentProduct.description).to.equal('Consequatur corrupti sed quia aut repellat consequuntur quia repellat. Dolores non tempora adipisci et id omnis tenetur. Eligendi corporis odio non aut delectus aliquid. Aspernatur consequuntur ut corporis. Sunt odio atque est vitae mollitia porro in voluptatem quo. Explicabo aperiam id atque et accusamus omnis.');
          expect(currentProduct.category).to.equal('Pants');
          expect(currentProduct.default_price).to.equal('862');
        });
        it('should contain the correct product data based on product_id - for id 600000', async () => {
          const inputId = 600000;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Salvatore Sweatpants');
          expect(currentProduct.slogan).to.equal('Voluptatem ullam dolor.');
          expect(currentProduct.description).to.equal('Nam aut ipsa iste. Nam assumenda dolorem consequatur perferendis ex explicabo possimus minima ut. Cupiditate nisi possimus sequi pariatur mollitia quia modi.');
          expect(currentProduct.category).to.equal('Sweatpants');
          expect(currentProduct.default_price).to.equal('58');
        });
        it('should contain the correct product data based on product_id - for id 600001', async () => {
          const inputId = 600001;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Theodore Shoes');
          expect(currentProduct.slogan).to.equal('Facilis recusandae illo dolores nesciunt.');
          expect(currentProduct.description).to.equal('Error molestias laboriosam pariatur et. Voluptatem sapiente aut. Impedit aut et. Sed ad minima error nisi impedit neque voluptatum amet non. Non voluptatem minima aperiam facilis neque repellat ut odio.');
          expect(currentProduct.category).to.equal('Shoes');
          expect(currentProduct.default_price).to.equal('47');
        });
        it('should contain the correct product data based on product_id - for id 650000', async () => {
          const inputId = 650000;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Vivian Sunglasses');
          expect(currentProduct.slogan).to.equal('Quam quo eos ea.');
          expect(currentProduct.description).to.equal('Aut qui ex et sunt officia quo possimus et illum. Nihil explicabo pariatur omnis a ut sunt a. Fuga sit facere possimus eaque. Et quia ut sit illo doloribus natus fuga molestias. Placeat nesciunt ducimus.');
          expect(currentProduct.category).to.equal('Sunglasses');
          expect(currentProduct.default_price).to.equal('739');
        });
        it('should contain the correct product data based on product_id - for id 650001', async () => {
          const inputId = 650001;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Daren Dress');
          expect(currentProduct.slogan).to.equal('Aut sit aut deserunt temporibus vitae autem porro.');
          expect(currentProduct.description).to.equal('Ut odit nemo omnis eligendi sit vero sapiente molestiae officia. Voluptas voluptatem maxime enim voluptatem veritatis in non dignissimos vero. Eius error quibusdam. Quibusdam ut placeat id sunt tenetur quia molestiae ut. Itaque voluptate aut nisi facilis exercitationem quis.');
          expect(currentProduct.category).to.equal('Dress');
          expect(currentProduct.default_price).to.equal('640');
        });
        it('should contain the correct product data based on product_id - for id 700000', async () => {
          const inputId = 700000;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Winona Sweater');
          expect(currentProduct.slogan).to.equal('Similique temporibus non rerum assumenda accusantium delectus corrupti ullam rerum.');
          expect(currentProduct.description).to.equal('Ut occaecati laboriosam quia doloribus dolorum. Sed velit quaerat sed autem adipisci nostrum fugiat voluptatem qui. Ea necessitatibus rem id sunt reiciendis odio. Magnam culpa officia ex sit. Pariatur alias dolorum quibusdam nobis tenetur assumenda sit.');
          expect(currentProduct.category).to.equal('Sweater');
          expect(currentProduct.default_price).to.equal('278');
        });
        it('should contain the correct product data based on product_id - for id 700001', async () => {
          const inputId = 700001;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Korbin Jacket');
          expect(currentProduct.slogan).to.equal('Voluptatum qui sed voluptatem.');
          expect(currentProduct.description).to.equal('Praesentium cupiditate est a ut laborum et quod id. Aut possimus tempora deserunt et provident voluptatibus officiis. Dolor rerum quis dolorum fugit deleniti reiciendis. Nobis omnis enim.');
          expect(currentProduct.category).to.equal('Jacket');
          expect(currentProduct.default_price).to.equal('609');
        });
        it('should contain the correct product data based on product_id - for id 750000', async () => {
          const inputId = 750000;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Major Shirt');
          expect(currentProduct.slogan).to.equal('Minima doloremque aut adipisci illo nemo.');
          expect(currentProduct.description).to.equal('Magni odit fuga error. Est error aliquam autem id vel sit. Debitis laboriosam et officia nam inventore necessitatibus et optio. Quidem occaecati non quia sit. Distinctio itaque voluptate.');
          expect(currentProduct.category).to.equal('Shirt');
          expect(currentProduct.default_price).to.equal('796');
        });
        it('should contain the correct product data based on product_id - for id 750001', async () => {
          const inputId = 750001;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Melisa 50 Hat');
          expect(currentProduct.slogan).to.equal('Modi reprehenderit dolorum optio quaerat.');
          expect(currentProduct.description).to.equal('Delectus reprehenderit eos rerum eligendi. Qui suscipit quas sed hic. Vel dolor id eaque quis aut.');
          expect(currentProduct.category).to.equal('Hat');
          expect(currentProduct.default_price).to.equal('158');
        });
        it('should contain the correct product data based on product_id - for id 800000', async () => {
          const inputId = 800000;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Laura Shirt');
          expect(currentProduct.slogan).to.equal('Consequuntur veritatis et incidunt nobis harum quo dolor cupiditate natus.');
          expect(currentProduct.description).to.equal('Ut consequatur quo ut nam itaque ea quas. Ut quasi itaque a quaerat sed optio sed et. Non alias ut voluptatibus. Officia saepe sed quod. Possimus vel natus aliquam aut est pariatur. Ipsa ea vero.');
          expect(currentProduct.category).to.equal('Shirt');
          expect(currentProduct.default_price).to.equal('618');
        });
        it('should contain the correct product data based on product_id - for id 800001', async () => {
          const inputId = 800001;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Hellen Cap');
          expect(currentProduct.slogan).to.equal('Doloribus odit nisi aut quia voluptas qui.');
          expect(currentProduct.description).to.equal('Voluptatem suscipit aut quas atque saepe. Corrupti eveniet officiis ut voluptates. Quia in cum modi. Dolores at aut.');
          expect(currentProduct.category).to.equal('Cap');
          expect(currentProduct.default_price).to.equal('846');
        });
        it('should contain the correct product data based on product_id - for id 850000', async () => {
          const inputId = 850000;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Rolando Tank Top');
          expect(currentProduct.slogan).to.equal('Et quia eos quia.');
          expect(currentProduct.description).to.equal('Quia voluptatum cumque aut et sint ut. Quisquam esse ipsum fugiat. Saepe consequatur dolores sit velit sint perspiciatis. Praesentium unde officia officia sit error.');
          expect(currentProduct.category).to.equal('Tank Top');
          expect(currentProduct.default_price).to.equal('448');
        });
        it('should contain the correct product data based on product_id - for id 850001', async () => {
          const inputId = 850001;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Astrid Shorts');
          expect(currentProduct.slogan).to.equal('Ipsam commodi nihil quia adipisci commodi magni et nesciunt.');
          expect(currentProduct.description).to.equal('Facilis rerum illo ipsa eum. Voluptas ullam commodi aut iusto. Itaque aliquid dolore suscipit numquam et facere harum.');
          expect(currentProduct.category).to.equal('Shorts');
          expect(currentProduct.default_price).to.equal('667');
        });
        it('should contain the correct product data based on product_id - for id 900000', async () => {
          const inputId = 900000;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Maritza Suit');
          expect(currentProduct.slogan).to.equal('Enim sit fugiat accusantium ea eligendi minus ullam.');
          expect(currentProduct.description).to.equal('Quia repellendus iure qui totam. Perspiciatis numquam veniam quasi ipsam unde eum. Nam qui minima ratione rerum commodi asperiores ipsam esse consectetur. Aut rem pariatur numquam.');
          expect(currentProduct.category).to.equal('Suit');
          expect(currentProduct.default_price).to.equal('536');
        });
        it('should contain the correct product data based on product_id - for id 900001', async () => {
          const inputId = 900001;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Deon Dress');
          expect(currentProduct.slogan).to.equal('Voluptatibus consequatur labore.');
          expect(currentProduct.description).to.equal('Sit tenetur suscipit ut veniam ullam commodi aut quia. Qui rem id voluptas ullam officia. Incidunt nemo voluptatum voluptas ut veritatis. Et velit doloribus itaque.');
          expect(currentProduct.category).to.equal('Dress');
          expect(currentProduct.default_price).to.equal('614');
        });
        it('should contain the correct product data based on product_id - for id 950000', async () => {
          const inputId = 950000;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Andreane Socks');
          expect(currentProduct.slogan).to.equal('Architecto tenetur reiciendis temporibus.');
          expect(currentProduct.description).to.equal('Natus deserunt et exercitationem architecto tenetur in. Dolor qui tempora. Cupiditate incidunt est quidem aut deleniti quam. Aut enim ad eos cum. Dignissimos eaque voluptas a voluptatibus delectus.');
          expect(currentProduct.category).to.equal('Socks');
          expect(currentProduct.default_price).to.equal('276');
        });
        it('should contain the correct product data based on product_id - for id 950001', async () => {
          const inputId = 950001;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Alena Romper');
          expect(currentProduct.slogan).to.equal('Deserunt facere commodi repellat ducimus.');
          expect(currentProduct.description).to.equal('Neque earum culpa sint autem ut. Et nisi reiciendis voluptatem ut eos natus. Occaecati et ea est ea nihil. Quos autem fugiat et aut iste enim. Error asperiores fugiat dicta.');
          expect(currentProduct.category).to.equal('Romper');
          expect(currentProduct.default_price).to.equal('391');
        });
        it('should contain the correct product data based on product_id - for id 1,000,011', async () => {
          const inputId = 1000011;
          const product = await db.models.Product.find({ id: inputId });
          const currentProduct = product[0];
          expect(currentProduct.id).to.equal(inputId);
          expect(currentProduct.name).to.equal('Evangeline Shoes');
          expect(currentProduct.slogan).to.equal('Aut recusandae tenetur sint laudantium.');
          expect(currentProduct.description).to.equal('Sunt recusandae laborum aut ut voluptatum in modi voluptatum. At sit maiores repudiandae facere ex officia dolorem. Consequatur quos illo. Molestiae quasi aliquid atque consequatur consequatur ipsum et. Nesciunt et dolorum sit ipsa ad aspernatur eos eum. Dicta voluptas et magni dicta ad mollitia.');
          expect(currentProduct.category).to.equal('Shoes');
          expect(currentProduct.default_price).to.equal('587');
        });
        describe('features', () => {
          it('should contain the correct array of features based on product id - for id 1', async () => {
            const inputId = 1;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['Canvas', 'Brass'];
            const validFeatures = ['Fabric', 'Buttons'];
            const validLength = 2;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 500000', async () => {
            const inputId = 500000;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['null', 'Skinny'];
            const validFeatures = ['Satisfaction Guaranteed', 'Cut'];
            const validLength = 2;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 500001', async () => {
            const inputId = 500001;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['Skinny', 'FullSupport Hybrid Compound', 'Armor Weave'];
            const validFeatures = ['Cut', 'Material'];
            const validLength = 3;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 100000', async () => {
            const inputId = 100000;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['null'];
            const validFeatures = ['Non-GMO', 'Sustainably Sourced'];
            const validLength = 2;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 100001', async () => {
            const inputId = 100001;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['DuraResin', 'FullSupport Hybrid Compound'];
            const validFeatures = ['Frame', 'Material'];
            const validLength = 2;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 150000', async () => {
            const inputId = 150000;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['null', 'Ultrasheen Silver'];
            const validFeatures = ['Lifetime Guarantee', 'Satisfaction Guaranteed', 'Lens'];
            const validLength = 3;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 150001', async () => {
            const inputId = 150001;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['null'];
            const validFeatures = ['Satisfaction Guaranteed'];
            const validLength = 1;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 200000', async () => {
            const inputId = 200000;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['null'];
            const validFeatures = ['Satisfaction Guaranteed'];
            const validLength = 1;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 200001', async () => {
            const inputId = 200001;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['null', 'Straight'];
            const validFeatures = ['Non-GMO', 'Cut'];
            const validLength = 2;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 250000', async () => {
            const inputId = 250000;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['White Resin', 'Ultrasheen Basic'];
            const validFeatures = ['Buttons', 'Lens'];
            const validLength = 2;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 250001', async () => {
            const inputId = 250001;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['null'];
            const validFeatures = ['Lifetime Guarantee'];
            const validLength = 2;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 300000', async () => {
            const inputId = 300000;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['null'];
            const validFeatures = ['Sustainably Sourced', 'Satisfaction Guaranteed'];
            const validLength = 2;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 300001', async () => {
            const inputId = 300001;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['Ultrasheen Basic', 'Striaght'];
            const validFeatures = ['Cut', 'Lens'];
            const validLength = 2;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 350000', async () => {
            const inputId = 350000;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['null', 'Cool Fit'];
            const validFeatures = ['5 Year Warranty', 'Fabric', 'Fair Trade Certified'];
            const validLength = 3;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 350001', async () => {
            const inputId = 350001;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['Striaght', 'null', 'Skinny'];
            const validFeatures = ['Cut', 'Green Leaf Certified', 'Cut'];
            const validLength = 3;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 400000', async () => {
            const inputId = 400000;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['null', 'Skinny'];
            const validFeatures = ['Lifetime Guarantee', 'Cut'];
            const validLength = 2;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 400001', async () => {
            const inputId = 400001;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['null'];
            const validFeatures = ['Lifetime Guarantee'];
            const validLength = 1;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 450000', async () => {
            const inputId = 450000;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['null'];
            const validFeatures = ['Lifetime Guarantee'];
            const validLength = 1;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 450001', async () => {
            const inputId = 450001;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['Straight', 'null'];
            const validFeatures = ['Cut', 'Lifetime Guarantee', 'Green Leaf Certified'];
            const validLength = 3;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 500000', async () => {
            const inputId = 500000;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['null', 'Skinny'];
            const validFeatures = ['Satisfaction Guaranteed', 'Cut'];
            const validLength = 2;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 500001', async () => {
            const inputId = 500001;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['Skinny', 'FullSupport Hybrid Compound', 'Armor Weave'];
            const validFeatures = ['Cut', 'Material'];
            const validLength = 3;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 550000', async () => {
            const inputId = 550000;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['null', 'Straight', 'Loose'];
            const validFeatures = ['Cut', 'Green Leaf Certified', 'Satisfaction Guaranteed'];
            const validLength = 4;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 550001', async () => {
            const inputId = 550001;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['AllLight Composition Resin'];
            const validFeatures = ['Frame'];
            const validLength = 1;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 600000', async () => {
            const inputId = 600000;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['null'];
            const validFeatures = ['Satisfaction Guaranteed', 'Sustainably Sourced'];
            const validLength = 2;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 600001', async () => {
            const inputId = 600001;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['Ivory', 'null'];
            const validFeatures = ['Buttons', 'Sustainably Sourced'];
            const validLength = 2;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 650000', async () => {
            const inputId = 650000;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['Blue Resin', 'null'];
            const validFeatures = ['Sustainably Sourced', 'Buttons', 'Lifetime Guarantee', 'Non-GMO'];
            const validLength = 4;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 650001', async () => {
            const inputId = 650001;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['null'];
            const validFeatures = ['5 Year Warranty'];
            const validLength = 1;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 700000', async () => {
            const inputId = 700000;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['Wool'];
            const validFeatures = ['Fabric'];
            const validLength = 1;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 700001', async () => {
            const inputId = 700001;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['null'];
            const validFeatures = ['Lifetime Guarantee', 'Non-GMO'];
            const validLength = 2;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 750000', async () => {
            const inputId = 750000;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['null', 'Loose'];
            const validFeatures = ['Sustainably Sourced', 'Cut'];
            const validLength = 3;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 750001', async () => {
            const inputId = 750001;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['Ultrasheen Basic', 'null'];
            const validFeatures = ['Lens', 'Non-GMO'];
            const validLength = 2;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 800000', async () => {
            const inputId = 800000;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['null', 'Double Stitch'];
            const validFeatures = ['Fair Trade Certified', 'Stitching'];
            const validLength = 2;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 800001', async () => {
            const inputId = 800001;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['null'];
            const validFeatures = ['Non-GMO'];
            const validLength = 2;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 850000', async () => {
            const inputId = 850000;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['null', 'Straight'];
            const validFeatures = ['Cut', 'Non-GMO'];
            const validLength = 2;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 850001', async () => {
            const inputId = 850001;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['Blue Resin', 'Cashmere'];
            const validFeatures = ['Buttons', 'Fabric'];
            const validLength = 2;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 900000', async () => {
            const inputId = 900000;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['Skinny', 'null'];
            const validFeatures = ['Cut', 'Fair Trade Certified'];
            const validLength = 2;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 900001', async () => {
            const inputId = 900001;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['null', '100% UV Protective'];
            const validFeatures = ['Non-GMO', 'Lens'];
            const validLength = 2;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 950000', async () => {
            const inputId = 950000;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['Loose', 'Rubber Mesh'];
            const validFeatures = ['Cut', 'Material'];
            const validLength = 2;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 950001', async () => {
            const inputId = 950001;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['null', 'Silk'];
            const validFeatures = ['Non-GMO', 'Fabric', 'Satisfaction Guaranteed', 'Non-GMO'];
            const validLength = 4;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          it('should contain the correct array of features based on product id - for id 1,000,011', async () => {
            const inputId = 1000011;
            const product = await db.models.Product.find({ id: inputId });
            const currentProduct = product[0];
            const { features } = currentProduct;
            const validValues = ['FullControl Skin'];
            const validFeatures = ['Material'];
            const validLength = 1;
            const currentValues = features.map((fV) => fV.value);
            currentValues.forEach((value) => {
              expect(validValues.includes(value)).to.equal(true);
            });
            const currentFeatures = features.map((f) => f.feature);
            currentFeatures.forEach((feat) => {
              expect(validFeatures.includes(feat)).to.equal(true);
            });
            expect(features.length).to.equal(validLength);
          });
          describe('style data', () => {
            it('should contain the styles, photos, and skus data based on product id 1', async () => {
              const inputId = 1;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const validStyleIds = ['1', '2', '3', '4', '5', '6'];
              const validStyleNames = ['Forest Green & Black', 'Desert Brown & Tan', 'Ocean Blue & Grey', 'Digital Red & Black', 'Sky Blue & White', 'Dark Grey & Black'];
              const validPhotos = [
                'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
                'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
                'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80',
                'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
                'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
                'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
                'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',

                'https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
                'https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
                'https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80',
                'https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2761&q=80',
                'https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80',
                'https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
                'https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=938&q=80',
                'https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
                'https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
                'https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80',
                'https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
                'https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
                'https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
                'https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                'https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
                'https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
                'https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80',
                'https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
                'https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
                'https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              ];
              const validSkuValues = [
                'XS',
                'S',
                'M',
                'L',
                'XL',
                'XXL',
                8,
                16,
                17,
                10,
                15,
                4,
                6,
              ];
              const validSkuMinId = 1;
              const validSkuMaxid = 36;
              const { styles } = currentProduct;

              const styleIds = styles.map(({ id }) => id);
              // make sure all style ids exist
              styleIds.forEach((id) => {
                expect(validStyleIds.includes(id)).to.equal(true);
              });
              // make sure all style names exist
              const styleNames = currentProduct.styles.map(({ name }) => name);
              styleNames.forEach((name) => {
                expect(validStyleNames.includes(name)).to.equal(true);
              });
              styles.forEach((style) => {
                // make sure all photos exist
                style.photos.forEach((photo) => {
                  expect(validPhotos.includes(photo.url)).to.equal(true);
                  expect(validPhotos.includes(photo.thumbnail_url)).to.equal(true);
                });
                // make sure all sku values exist
                const skuValues = Object.values(style.skus);
                skuValues.forEach((value) => {
                  expect(validSkuValues.includes(Number(value.quantity))).to.equal(true);
                  expect(validSkuValues.includes(value.size)).to.equal(true);
                });
                // make sure all sku ids exist
                const skuIds = Object.keys(style.skus);
                const validSkuids = skuIds.every((id) => Number(id) >= validSkuMinId || Number(id) <= validSkuMaxid);
                expect(validSkuids).to.equal(true);
              });
            });
            it('should contain the styles, photos, and skus data based on product id 50000', async () => {
              const inputId = 50000;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const { styles } = currentProduct;
              expect(styles.length).to.equal(0);
            });
            it('should contain the styles, photos, and skus data based on product id 50001', async () => {
              const inputId = 50001;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const validStyleIds = ['98285', '98286'];
              const validStyleNames = ['Fuchsia', 'Indigo'];
              const validPhotos = [
                'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1512023983263-7e94bf6b913e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
                'https://images.unsplash.com/photo-1499714832275-d6205d94c35d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
                'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',

              ];
              const validSkuValues = [
                'XS',
                'S',
                'M',
                'L',
                'XL',
                'XXL',
                36,
                22,
                20,
                1,
                25,
                47,
                24,
                42,
                57,
                3,
                49,
              ];
              const validSkuMinId = 566560;
              const validSkuMaxid = 566571;
              const { styles } = currentProduct;
              const styleIds = styles.map(({ id }) => id);
              styleIds.forEach((id) => {
                expect(validStyleIds.includes(id)).to.equal(true);
              });
              const styleNames = currentProduct.styles.map(({ name }) => name);
              styleNames.forEach((name) => {
                expect(validStyleNames.includes(name)).to.equal(true);
              });
              styles.forEach((style) => {
                style.photos.forEach((photo) => {
                  expect(validPhotos.includes(photo.url)).to.equal(true);
                  expect(validPhotos.includes(photo.thumbnail_url)).to.equal(true);
                });
                const skuValues = Object.values(style.skus);
                skuValues.forEach((value) => {
                  expect(validSkuValues.includes(Number(value.quantity))).to.equal(true);
                  expect(validSkuValues.includes(value.size)).to.equal(true);
                });
                const skuIds = Object.keys(style.skus);
                const validSkuids = skuIds.every((id) => Number(id) >= validSkuMinId || Number(id) <= validSkuMaxid);
                expect(validSkuids).to.equal(true);
              });
            });
            it('should contain the styles, photos, and skus data based on product id 100000', async () => {
              const inputId = 100000;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const validStyleIds = ['196784'];
              const validStyleNames = ['Lavender'];
              const validPhotos = [
                'https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1562542082-519ebcdb43e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1554136920-a1df2909d8f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
                'https://images.unsplash.com/photo-1499714832275-d6205d94c35d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              ];
              const validSkuValues = [
                'One Size',
                25,
              ];
              const validSkuMinId = 1137064;
              const validSkuMaxid = 1137064;
              const { styles } = currentProduct;
              const styleIds = styles.map(({ id }) => id);
              styleIds.forEach((id) => {
                expect(validStyleIds.includes(id)).to.equal(true);
              });
              const styleNames = currentProduct.styles.map(({ name }) => name);
              styleNames.forEach((name) => {
                expect(validStyleNames.includes(name)).to.equal(true);
              });
              styles.forEach((style) => {
                style.photos.forEach((photo) => {
                  expect(validPhotos.includes(photo.url)).to.equal(true);
                  expect(validPhotos.includes(photo.thumbnail_url)).to.equal(true);
                });
                const skuValues = Object.values(style.skus);
                skuValues.forEach((value) => {
                  expect(validSkuValues.includes(Number(value.quantity))).to.equal(true);
                  expect(validSkuValues.includes(value.size)).to.equal(true);
                });
                const skuIds = Object.keys(style.skus);
                const validSkuids = skuIds.every((id) => Number(id) >= validSkuMinId || Number(id) <= validSkuMaxid);
                expect(validSkuids).to.equal(true);
              });
            });
            it('should contain the styles, photos, and skus data based on product id 100001', async () => {
              const inputId = 100001;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const { styles } = currentProduct;
              expect(styles.length).to.equal(0);
            });
            it('should contain the styles, photos, and skus data based on product id 150000', async () => {
              const inputId = 150000;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const validStyleIds = ['294258', '294259'];
              const validStyleNames = ['Ivory', 'Gold'];
              const validPhotos = [
                'https://images.unsplash.com/photo-1552904219-f4b87efe8792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80',
                'https://images.unsplash.com/photo-1430390456011-25ac9244999c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
                'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
                'https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1447879027584-9d17c2ca0333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
                'https://images.unsplash.com/photo-1459631836437-1c2824882e3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',

              ];
              const validSkuValues = [
                'XS',
                18,
                'S',
                3,
                'M',
                1,
                'L',
                17,
                'XL',
                43,
                'XXL',
                28,
                4,
                59,
                51,
                21,
                20,
                7,
              ];
              const validSkuMinId = 1700178;
              const validSkuMaxid = 1700189;
              const { styles } = currentProduct;
              const styleIds = styles.map(({ id }) => id);
              styleIds.forEach((id) => {
                expect(validStyleIds.includes(id)).to.equal(true);
              });
              const styleNames = currentProduct.styles.map(({ name }) => name);
              styleNames.forEach((name) => {
                expect(validStyleNames.includes(name)).to.equal(true);
              });
              styles.forEach((style) => {
                style.photos.forEach((photo) => {
                  expect(validPhotos.includes(photo.url)).to.equal(true);
                  expect(validPhotos.includes(photo.thumbnail_url)).to.equal(true);
                });
                const skuValues = Object.values(style.skus);
                skuValues.forEach((value) => {
                  expect(validSkuValues.includes(Number(value.quantity))).to.equal(true);
                  expect(validSkuValues.includes(value.size)).to.equal(true);
                });
                const skuIds = Object.keys(style.skus);
                const validSkuids = skuIds.every((id) => Number(id) >= validSkuMinId || Number(id) <= validSkuMaxid);
                expect(validSkuids).to.equal(true);
              });
            });
            it('should contain the styles, photos, and skus data based on product id 150001', async () => {
              const inputId = 150001;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const validStyleIds = ['294260', '294261', '294262'];
              const validStyleNames = ['Orchid', 'Teal'];
              const validPhotos = [
                'https://images.unsplash.com/photo-1519482816300-1490fdf2c2bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
                'https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80',
                'https://images.unsplash.com/photo-1522032238811-74bc59578599?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
                'https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1562542132-8555e1b583f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2057&q=80',
                'https://images.unsplash.com/photo-1542818212-9899bafcb9db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1552904219-f4b87efe8792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80',
                'https://images.unsplash.com/photo-1552904219-f4b87efe8792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              ];
              const validSkuValues = [
                'XS',
                48,
                'S',
                32,
                'M',
                16,
                'L',
                9,
                'XL',
                32,
                'XXL',
                4,
                46,
                2,
                45,
                53,
                17,
                25,
                18,
                47,
                6,
                50,
              ];
              const validSkuMinId = 1700190;
              const validSkuMaxid = 1700207;
              const { styles } = currentProduct;
              const styleIds = styles.map(({ id }) => id);
              styleIds.forEach((id) => {
                expect(validStyleIds.includes(id)).to.equal(true);
              });
              const styleNames = currentProduct.styles.map(({ name }) => name);
              styleNames.forEach((name) => {
                expect(validStyleNames.includes(name)).to.equal(true);
              });
              styles.forEach((style) => {
                style.photos.forEach((photo) => {
                  expect(validPhotos.includes(photo.url)).to.equal(true);
                  expect(validPhotos.includes(photo.thumbnail_url)).to.equal(true);
                });
                const skuValues = Object.values(style.skus);
                skuValues.forEach((value) => {
                  expect(validSkuValues.includes(Number(value.quantity))).to.equal(true);
                  expect(validSkuValues.includes(value.size)).to.equal(true);
                });
                const skuIds = Object.keys(style.skus);
                const validSkuids = skuIds.every((id) => Number(id) >= validSkuMinId || Number(id) <= validSkuMaxid);
                expect(validSkuids).to.equal(true);
              });
            });
            it('should contain the styles, photos, and skus data based on product id 200000', async () => {
              const inputId = 200000;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const validStyleIds = ['391574', '391575', '391576'];
              const validStyleNames = ['Pink', 'Olive', 'Lavender'];
              const validPhotos = [
                'https://images.unsplash.com/photo-1451256656121-9ffc0c898a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1511499008188-de491bbbae98?ixlib=rb-1.2.1&auto=format&fit=crop&w=988&q=80',
                'https://images.unsplash.com/photo-1562542119-19d015b93c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1558422504-3d17542c1799?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
                'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1428790031246-698d71b6fe3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1544701758-5241eb611a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1559304022-afbf28f53c4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1656&q=80',
                'https://images.unsplash.com/photo-1536830220630-ce146cccac84?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',

              ];
              const validSkuValues = [
                'XS',
                27,
                'S',
                5,
                'M',
                18,
                'L',
                6,
                'XL',
                34,
                'XXL',
                41,
                25,
                13,
                2,
                35,
                5,
                52,
                12,
                19,
                42,
                30,
                48,
                7,
              ];
              const validSkuMinId = 2263619;
              const validSkuMaxid = 2263636;
              const { styles } = currentProduct;
              const styleIds = styles.map(({ id }) => id);
              styleIds.forEach((id) => {
                expect(validStyleIds.includes(id)).to.equal(true);
              });
              const styleNames = currentProduct.styles.map(({ name }) => name);
              styleNames.forEach((name) => {
                expect(validStyleNames.includes(name)).to.equal(true);
              });
              styles.forEach((style) => {
                style.photos.forEach((photo) => {
                  expect(validPhotos.includes(photo.url)).to.equal(true);
                  expect(validPhotos.includes(photo.thumbnail_url)).to.equal(true);
                });
                const skuValues = Object.values(style.skus);
                skuValues.forEach((value) => {
                  expect(validSkuValues.includes(Number(value.quantity))).to.equal(true);
                  expect(validSkuValues.includes(value.size)).to.equal(true);
                });
                const skuIds = Object.keys(style.skus);
                const validSkuids = skuIds.every((id) => Number(id) >= validSkuMinId || Number(id) <= validSkuMaxid);
                expect(validSkuids).to.equal(true);
              });
            });
            it('should contain the styles, photos, and skus data based on product id 200001', async () => {
              const inputId = 200001;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const validStyleIds = ['391577', '391578'];
              const validStyleNames = ['White', 'Olive'];
              const validPhotos = [
                'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
                'https://images.unsplash.com/photo-1556812191-381c7e7d96d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
                'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1550338300-f9a475b50ba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80',
                'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
                'https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
                'https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1518687338977-a84d3086a934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=652&q=80',
                'https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1536830220630-ce146cccac84?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
              ];
              const validSkuValues = [
                'One Size',
                53,
                1,
              ];
              const validSkuMinId = 2263637;
              const validSkuMaxid = 2263638;
              const { styles } = currentProduct;
              const styleIds = styles.map(({ id }) => id);
              styleIds.forEach((id) => {
                expect(validStyleIds.includes(id)).to.equal(true);
              });
              const styleNames = currentProduct.styles.map(({ name }) => name);
              styleNames.forEach((name) => {
                expect(validStyleNames.includes(name)).to.equal(true);
              });
              styles.forEach((style) => {
                style.photos.forEach((photo) => {
                  expect(validPhotos.includes(photo.url)).to.equal(true);
                  expect(validPhotos.includes(photo.thumbnail_url)).to.equal(true);
                });
                const skuValues = Object.values(style.skus);
                skuValues.forEach((value) => {
                  expect(validSkuValues.includes(Number(value.quantity))).to.equal(true);
                  expect(validSkuValues.includes(value.size)).to.equal(true);
                });
                const skuIds = Object.keys(style.skus);
                const validSkuids = skuIds.every((id) => Number(id) >= validSkuMinId || Number(id) <= validSkuMaxid);
                expect(validSkuids).to.equal(true);
              });
            });
            it('should contain the styles, photos, and skus data based on product id 250000', async () => {
              const inputId = 250000;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const validStyleIds = ['489445', '489446', '489447'];
              const validStyleNames = ['Grey', 'Fuchsia', 'Sky blue'];
              const validPhotos = [
                'https://images.unsplash.com/photo-1505248254168-1de4e1abfa78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80',
                'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1498200163530-bdb7c50ec863?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1518687338977-a84d3086a934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1461551449292-b63f7419ac93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1970&q=80',
                'https://images.unsplash.com/photo-1558682596-dea9bf84c219?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80',
                'https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
                'https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
                'https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1560095633-6803ba0461cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80',
                'https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',

              ];
              const validSkuValues = [
                'XS',
                46,
                'S',
                27,
                'M',
                58,
                'L',
                56,
                'XL',
                49,
                'XXL',
                35,
                42,
                54,
                0,
                19,
                5,
                52,
                34,
                39,
              ];
              const validSkuMinId = 2829575;
              const validSkuMaxid = 2829592;
              const { styles } = currentProduct;
              const styleIds = styles.map(({ id }) => id);
              styleIds.forEach((id) => {
                expect(validStyleIds.includes(id)).to.equal(true);
              });
              const styleNames = currentProduct.styles.map(({ name }) => name);
              styleNames.forEach((name) => {
                expect(validStyleNames.includes(name)).to.equal(true);
              });
              styles.forEach((style) => {
                style.photos.forEach((photo) => {
                  expect(validPhotos.includes(photo.url)).to.equal(true);
                  expect(validPhotos.includes(photo.thumbnail_url)).to.equal(true);
                });
                const skuValues = Object.values(style.skus);
                skuValues.forEach((value) => {
                  expect(validSkuValues.includes(Number(value.quantity))).to.equal(true);
                  expect(validSkuValues.includes(value.size)).to.equal(true);
                });
                const skuIds = Object.keys(style.skus);
                const validSkuids = skuIds.every((id) => Number(id) >= validSkuMinId || Number(id) <= validSkuMaxid);
                expect(validSkuids).to.equal(true);
              });
            });
            it('should contain the styles, photos, and skus data based on product id 250001', async () => {
              const inputId = 250001;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const { styles } = currentProduct;
              expect(styles.length).to.equal(0);
            });
            it('should contain the styles, photos, and skus data based on product id 300000', async () => {
              const inputId = 300000;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const validStyleIds = ['587388'];
              const validStyleNames = ['Pink'];
              const validPhotos = [

                'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80',
                'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1505248254168-1de4e1abfa78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80',
                'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',

              ];
              const validSkuValues = [
                'XS',
                40,
                'S',
                55,
                'M',
                17,
                'L',
                33,
                'XL',
                34,
                'XXL',
                12,
              ];
              const validSkuMinId = 3395933;
              const validSkuMaxid = 3395938;
              const { styles } = currentProduct;
              const styleIds = styles.map(({ id }) => id);
              styleIds.forEach((id) => {
                expect(validStyleIds.includes(id)).to.equal(true);
              });
              const styleNames = currentProduct.styles.map(({ name }) => name);
              styleNames.forEach((name) => {
                expect(validStyleNames.includes(name)).to.equal(true);
              });
              styles.forEach((style) => {
                style.photos.forEach((photo) => {
                  expect(validPhotos.includes(photo.url)).to.equal(true);
                  expect(validPhotos.includes(photo.thumbnail_url)).to.equal(true);
                });
                const skuValues = Object.values(style.skus);
                skuValues.forEach((value) => {
                  expect(validSkuValues.includes(Number(value.quantity))).to.equal(true);
                  expect(validSkuValues.includes(value.size)).to.equal(true);
                });
                const skuIds = Object.keys(style.skus);
                const validSkuids = skuIds.every((id) => Number(id) >= validSkuMinId || Number(id) <= validSkuMaxid);
                expect(validSkuids).to.equal(true);
              });
            });
            it('should contain the styles, photos, and skus data based on product id 300001', async () => {
              const inputId = 300001;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const validStyleIds = ['587389', '587390', '587391'];
              const validStyleNames = ['Olive', 'Azure', 'Lime'];
              const validPhotos = [
                'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80',
                'https://images.unsplash.com/photo-1547597456-4c18a06d9073?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1558191053-c03db2757e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1447879027584-9d17c2ca0333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
                'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1469617833234-8a6843da14d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2764&q=80',
                'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1474494819794-90f9664b530d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1542818212-9899bafcb9db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1526&q=80',
                'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1554735490-80893c93b06f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',

              ];
              const validSkuValues = [
                '7',
                21,
                '7.5',
                25,
                '8',
                46,
                '8.5',
                '9',
                17,
                '9.5',
                27,
                '10',
                55,
                '10.5',
                34,
                '11',
                33,
                '11.5',
                41,
                '12',
                13,
                51,
                35,
                56,
                0,
                52,
                50,
                8,
                12,
                42,
                58,
                54,
                43,
                1,
                39,
                16,
                20,
                15,
              ];
              const validSkuMinId = 3395939;
              const validSkuMaxid = 3395971;
              const { styles } = currentProduct;
              const styleIds = styles.map(({ id }) => id);
              styleIds.forEach((id) => {
                expect(validStyleIds.includes(id)).to.equal(true);
              });
              const styleNames = currentProduct.styles.map(({ name }) => name);
              styleNames.forEach((name) => {
                expect(validStyleNames.includes(name)).to.equal(true);
              });
              styles.forEach((style) => {
                style.photos.forEach((photo) => {
                  expect(validPhotos.includes(photo.url)).to.equal(true);
                  expect(validPhotos.includes(photo.thumbnail_url)).to.equal(true);
                });
                const skuValues = Object.values(style.skus);
                skuValues.forEach((value) => {
                  expect(validSkuValues.includes(Number(value.quantity))).to.equal(true);
                  expect(validSkuValues.includes(value.size)).to.equal(true);
                });
                const skuIds = Object.keys(style.skus);
                const validSkuids = skuIds.every((id) => Number(id) >= validSkuMinId || Number(id) <= validSkuMaxid);
                expect(validSkuids).to.equal(true);
              });
            });
            it('should contain the styles, photos, and skus data based on product id 350000', async () => {
              const inputId = 350000;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const validStyleIds = ['685194', '685195'];
              const validStyleNames = ['Sky blue', 'Magenta'];
              const validPhotos = [
                'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80',
                'https://images.unsplash.com/photo-1500340520802-1687634cbe38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
                'https://images.unsplash.com/photo-1447879027584-9d17c2ca0333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1518687338977-a84d3086a934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=652&q=80',
                'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
                'https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80',
                'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
                'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1519857609704-61e751edba25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
                'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',

              ];
              const validSkuValues = [
                'XS',
                52,
                'S',
                28,
                'M',
                7,
                'L',
                1,
                'XL',
                56,
                'XXL',
                23,
                8,
                29,
                44,
                42,
                19,
                11,
              ];
              const validSkuMinId = 3962469;
              const validSkuMaxid = 3962480;
              const { styles } = currentProduct;
              const styleIds = styles.map(({ id }) => id);
              styleIds.forEach((id) => {
                expect(validStyleIds.includes(id)).to.equal(true);
              });
              const styleNames = currentProduct.styles.map(({ name }) => name);
              styleNames.forEach((name) => {
                expect(validStyleNames.includes(name)).to.equal(true);
              });
              styles.forEach((style) => {
                style.photos.forEach((photo) => {
                  expect(validPhotos.includes(photo.url)).to.equal(true);
                  expect(validPhotos.includes(photo.thumbnail_url)).to.equal(true);
                });
                const skuValues = Object.values(style.skus);
                skuValues.forEach((value) => {
                  expect(validSkuValues.includes(Number(value.quantity))).to.equal(true);
                  expect(validSkuValues.includes(value.size)).to.equal(true);
                });
                const skuIds = Object.keys(style.skus);
                const validSkuids = skuIds.every((id) => Number(id) >= validSkuMinId || Number(id) <= validSkuMaxid);
                expect(validSkuids).to.equal(true);
              });
            });
            it('should contain the styles, photos, and skus data based on product id 350001', async () => {
              const inputId = 350001;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const validStyleIds = ['685196', '685197', '685198', '685199'];
              const validStyleNames = ['Black', 'Red', 'Indigo', 'Sky blue'];
              const validPhotos = [
                'https://images.unsplash.com/photo-1554136920-a1df2909d8f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
                'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1562542096-218d8f9760bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1430390456011-25ac9244999c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1519330377309-9ee1c6783348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
                'https://images.unsplash.com/photo-1526113438757-122d6d54da4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1550188053-b4e1e8e4f94f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80',
                'https://images.unsplash.com/uploads/1412198532414025532c0/6a31309c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1516684810863-e49c82f1f092?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=965&q=80',
                'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1526113438757-122d6d54da4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1562542096-218d8f9760bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2057&q=80',
                'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              ];
              const validSkuValues = [
                'XS',
                12,
                'S',
                15,
                'M',
                56,
                'L',
                42,
                'XL',
                57,
                'XXL',
                49,
                50,
                3,
                35,
                36,
                33,
                25,
                27,
                51,
                48,
                30,
                31,
                11,
                44,
              ];
              const validSkuMinId = 3962481;
              const validSkuMaxid = 3962504;
              const { styles } = currentProduct;
              const styleIds = styles.map(({ id }) => id);
              styleIds.forEach((id) => {
                expect(validStyleIds.includes(id)).to.equal(true);
              });
              const styleNames = currentProduct.styles.map(({ name }) => name);
              styleNames.forEach((name) => {
                expect(validStyleNames.includes(name)).to.equal(true);
              });
              styles.forEach((style) => {
                style.photos.forEach((photo) => {
                  expect(validPhotos.includes(photo.url)).to.equal(true);
                  expect(validPhotos.includes(photo.thumbnail_url)).to.equal(true);
                });
                const skuValues = Object.values(style.skus);
                skuValues.forEach((value) => {
                  expect(validSkuValues.includes(Number(value.quantity))).to.equal(true);
                  expect(validSkuValues.includes(value.size)).to.equal(true);
                });
                const skuIds = Object.keys(style.skus);
                const validSkuids = skuIds.every((id) => Number(id) >= validSkuMinId || Number(id) <= validSkuMaxid);
                expect(validSkuids).to.equal(true);
              });
            });
            it('should contain the styles, photos, and skus data based on product id 400000', async () => {
              const inputId = 400000;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const validStyleIds = ['783053', '783054'];
              const validStyleNames = ['Mint green', 'Red'];
              const validPhotos = [
                'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
                'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
                'https://images.unsplash.com/photo-1524604519054-2365ac11e431?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1451256656121-9ffc0c898a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
              ];
              const validSkuValues = [
                'XS',
                14,
                'S',
                13,
                'M',
                53,
                'L',
                19,
                'XL',
                16,
                'XXL',
                54,
                23,
                25,
                27,
                51,
                33,
              ];
              const validSkuMinId = 4528793;
              const validSkuMaxid = 4528804;
              const { styles } = currentProduct;
              const styleIds = styles.map(({ id }) => id);
              styleIds.forEach((id) => {
                expect(validStyleIds.includes(id)).to.equal(true);
              });
              const styleNames = currentProduct.styles.map(({ name }) => name);
              styleNames.forEach((name) => {
                expect(validStyleNames.includes(name)).to.equal(true);
              });
              styles.forEach((style) => {
                style.photos.forEach((photo) => {
                  expect(validPhotos.includes(photo.url)).to.equal(true);
                  expect(validPhotos.includes(photo.thumbnail_url)).to.equal(true);
                });
                const skuValues = Object.values(style.skus);
                skuValues.forEach((value) => {
                  expect(validSkuValues.includes(Number(value.quantity))).to.equal(true);
                  expect(validSkuValues.includes(value.size)).to.equal(true);
                });
                const skuIds = Object.keys(style.skus);
                const validSkuids = skuIds.every((id) => Number(id) >= validSkuMinId || Number(id) <= validSkuMaxid);
                expect(validSkuids).to.equal(true);
              });
            });
            it('should contain the styles, photos, and skus data based on product id 400001', async () => {
              const inputId = 400001;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const validStyleIds = ['783055', '783056', '783057', '783058', '783059'];
              const validStyleNames = ['Plum', 'Orange', 'Azure', 'Pink', 'Lime'];
              const validPhotos = [
                'https://images.unsplash.com/photo-1511766566737-1740d1da79be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1473396413399-6717ef7c4093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1457968867385-9f877f3f2bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1549540806-76ce9007b674?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1523296357416-a4b3c4b9ee65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80',
                'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80',
                'https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
                'https://images.unsplash.com/photo-1515243061678-14fc18b93935?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
                'https://images.unsplash.com/photo-1503449377594-32dd9ac4467c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1501813722636-45de2fe4f9b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80',
                'https://images.unsplash.com/photo-1473396413399-6717ef7c4093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1541006008768-d181e7f9f3d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80',
                'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1544701758-5241eb611a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1516199707327-5399434d0aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',

              ];
              const validSkuValues = [
                'XS',
                30,
                'S',
                50,
                'M',
                30,
                'L',
                5,
                'XL',
                37,
                'XXL',
                46,
                42,
                39,
                13,
                6,
                54,
                31,
                11,
                20,
                2,
                6,
                35,
                10,
                27,
                53,
                33,
                59,
                28,
                17,
                47,
                16,
                41,
              ];
              const validSkuMinId = 4528805;
              const validSkuMaxid = 4528834;
              const { styles } = currentProduct;
              const styleIds = styles.map(({ id }) => id);
              styleIds.forEach((id) => {
                expect(validStyleIds.includes(id)).to.equal(true);
              });
              const styleNames = currentProduct.styles.map(({ name }) => name);
              styleNames.forEach((name) => {
                expect(validStyleNames.includes(name)).to.equal(true);
              });
              styles.forEach((style) => {
                style.photos.forEach((photo) => {
                  expect(validPhotos.includes(photo.url)).to.equal(true);
                  expect(validPhotos.includes(photo.thumbnail_url)).to.equal(true);
                });
                const skuValues = Object.values(style.skus);
                skuValues.forEach((value) => {
                  expect(validSkuValues.includes(Number(value.quantity))).to.equal(true);
                  expect(validSkuValues.includes(value.size)).to.equal(true);
                });
                const skuIds = Object.keys(style.skus);
                const validSkuids = skuIds.every((id) => Number(id) >= validSkuMinId || Number(id) <= validSkuMaxid);
                expect(validSkuids).to.equal(true);
              });
            });
            it('should contain the styles, photos, and skus data based on product id 450000', async () => {
              const inputId = 450000;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const validStyleIds = ['880993'];
              const validStyleNames = ['Ivory'];
              const validPhotos = [
                'https://images.unsplash.com/photo-1519722417352-7d6959729417?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
                'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1505248254168-1de4e1abfa78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80',
                'https://images.unsplash.com/photo-1560095633-6803ba0461cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              ];
              const validSkuValues = [
                'XS',
                40,
                'S',
                52,
                'M',
                42,
                'L',
                'XL',
                17,
                'XXL',
                22,
              ];
              const validSkuMinId = 5094358;
              const validSkuMaxid = 5094363;
              const { styles } = currentProduct;
              const styleIds = styles.map(({ id }) => id);

              styleIds.forEach((id) => {
                expect(validStyleIds.includes(id)).to.equal(true);
              });
              const styleNames = currentProduct.styles.map(({ name }) => name);
              styleNames.forEach((name) => {
                expect(validStyleNames.includes(name)).to.equal(true);
              });
              styles.forEach((style) => {
                style.photos.forEach((photo) => {
                  expect(validPhotos.includes(photo.url)).to.equal(true);
                  expect(validPhotos.includes(photo.thumbnail_url)).to.equal(true);
                });
                const skuValues = Object.values(style.skus);
                skuValues.forEach((value) => {
                  expect(validSkuValues.includes(Number(value.quantity))).to.equal(true);
                  expect(validSkuValues.includes(value.size)).to.equal(true);
                });
                const skuIds = Object.keys(style.skus);
                const validSkuids = skuIds.every((id) => Number(id) >= validSkuMinId || Number(id) <= validSkuMaxid);
                expect(validSkuids).to.equal(true);
              });
            });
            it('should contain the styles, photos, and skus data based on product id 450001', async () => {
              const inputId = 450001;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const validStyleIds = ['880994', '880995', '880996'];
              const validStyleNames = ['Maroon', 'Black', 'Indigo'];
              const validPhotos = [
                'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
                'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1519722417352-7d6959729417?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
                'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1525896650794-60ad4ec40d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1536181211993-cf4b2c100475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1516199707327-5399434d0aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1083&q=80',
                'https://images.unsplash.com/photo-1534550017194-5df79ed78967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
                'https://images.unsplash.com/photo-1515110371136-7e393289662c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1503449377594-32dd9ac4467c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
                'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1544701758-5241eb611a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1474494819794-90f9664b530d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80',
                'https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1516684810863-e49c82f1f092?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=965&q=80',
                'https://images.unsplash.com/photo-1534550017194-5df79ed78967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',

              ];
              const validSkuValues = [
                'XS',
                31,
                'S',
                18,
                'M',
                17,
                'L',
                'XL',
                34,
                'XXL',
                35,
                28,
                42,
                12,
                39,
                1,
                52,
                48,
                36,
                43,
                30,
                19,
              ];
              const validSkuMinId = 5094364;
              const validSkuMaxid = 5094381;
              const { styles } = currentProduct;

              const styleIds = styles.map(({ id }) => id);
              styleIds.forEach((id) => {
                expect(validStyleIds.includes(id)).to.equal(true);
              });
              const styleNames = currentProduct.styles.map(({ name }) => name);
              styleNames.forEach((name) => {
                expect(validStyleNames.includes(name)).to.equal(true);
              });
              styles.forEach((style) => {
                style.photos.forEach((photo) => {
                  expect(validPhotos.includes(photo.url)).to.equal(true);
                  expect(validPhotos.includes(photo.thumbnail_url)).to.equal(true);
                });
                const skuValues = Object.values(style.skus);
                skuValues.forEach((value) => {
                  expect(validSkuValues.includes(Number(value.quantity))).to.equal(true);
                  expect(validSkuValues.includes(value.size)).to.equal(true);
                });
                const skuIds = Object.keys(style.skus);
                const validSkuids = skuIds.every((id) => Number(id) >= validSkuMinId || Number(id) <= validSkuMaxid);
                expect(validSkuids).to.equal(true);
              });
            });
            it('should contain the styles, photos, and skus data based on product id 500000', async () => {
              const inputId = 500000;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const validStyleIds = ['977991', '977992', '977993'];
              const validStyleNames = ['Pink', 'Orange', 'Pink'];
              const validPhotos = [
                'https://images.unsplash.com/11/converse-fields.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1570&q=80',
                'https://images.unsplash.com/photo-1498200163530-bdb7c50ec863?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
                'https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
                'https://images.unsplash.com/photo-1546367791-e7447b431084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
                'https://images.unsplash.com/photo-1510217167326-549ae78e4738?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
                'https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1499714832275-d6205d94c35d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80',
                'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',

              ];
              const validSkuValues = [
                'XS',
                40,
                'S',
                18,
                'M',
                14,
                'L',
                46,
                'XL',
                10,
                'XXL',
                42,
                13,
                2,
                12,
                53,
                34,
                50,
                59,
                51,
                30,
              ];
              const validSkuMinId = 5654506;
              const validSkuMaxid = 5654523;
              const { styles } = currentProduct;
              // console.log(styles)
              const styleIds = styles.map(({ id }) => id);
              styleIds.forEach((id) => {
                expect(validStyleIds.includes(id)).to.equal(true);
              });
              const styleNames = currentProduct.styles.map(({ name }) => name);
              styleNames.forEach((name) => {
                expect(validStyleNames.includes(name)).to.equal(true);
              });
              styles.forEach((style) => {
                style.photos.forEach((photo) => {
                  expect(validPhotos.includes(photo.url)).to.equal(true);
                  expect(validPhotos.includes(photo.thumbnail_url)).to.equal(true);
                });
                const skuValues = Object.values(style.skus);
                skuValues.forEach((value) => {
                  expect(validSkuValues.includes(Number(value.quantity))).to.equal(true);
                  expect(validSkuValues.includes(value.size)).to.equal(true);
                });
                const skuIds = Object.keys(style.skus);
                const validSkuids = skuIds.every((id) => Number(id) >= validSkuMinId || Number(id) <= validSkuMaxid);
                expect(validSkuids).to.equal(true);
              });
            });
            it('should contain the styles, photos, and skus data based on product id 500001', async () => {
              const inputId = 500001;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const { styles } = currentProduct;
              expect(styles.length).to.equal(0);
            });
            it('should contain the styles, photos, and skus data based on product id 550000', async () => {
              const inputId = 550000;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const validStyleIds = ['1075993', '1075994'];
              const validStyleNames = ['Green', 'Ivory'];
              const validPhotos = [
                'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1547597456-4c18a06d9073?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
                'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
                'https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
                'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',

              ];
              const validSkuValues = [
                '7',
                59,
                '7.5',
                33,
                '8',
                28,
                '8.5',
                20,
                '9',
                '9.5',
                58,
                '10',
                22,
                '10.5',
                57,
                '11',
                54,
                '11.5',
                '12',
                32,
                45,
                42,
                11,
                24,
                14,
                2,
                12,
                5,
                40,
              ];
              const validSkuMinId = 6221108;
              const validSkuMaxid = 6221129;
              const { styles } = currentProduct;
              const styleIds = styles.map(({ id }) => id);
              styleIds.forEach((id) => {
                expect(validStyleIds.includes(id)).to.equal(true);
              });
              const styleNames = currentProduct.styles.map(({ name }) => name);
              styleNames.forEach((name) => {
                expect(validStyleNames.includes(name)).to.equal(true);
              });
              styles.forEach((style) => {
                style.photos.forEach((photo) => {
                  expect(validPhotos.includes(photo.url)).to.equal(true);
                  expect(validPhotos.includes(photo.thumbnail_url)).to.equal(true);
                });
                const skuValues = Object.values(style.skus);
                skuValues.forEach((value) => {
                  expect(validSkuValues.includes(Number(value.quantity))).to.equal(true);
                  expect(validSkuValues.includes(value.size)).to.equal(true);
                });
                const skuIds = Object.keys(style.skus);
                const validSkuids = skuIds.every((id) => Number(id) >= validSkuMinId || Number(id) <= validSkuMaxid);
                expect(validSkuids).to.equal(true);
              });
            });
            it('should contain the styles, photos, and skus data based on product id 550001', async () => {
              const inputId = 550001;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const validStyleIds = ['1075995'];
              const validStyleNames = ['Olive'];
              const validPhotos = [
                'https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80',
                'https://images.unsplash.com/photo-1552904219-f4b87efe8792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              ];
              const validSkuValues = [
                'XS',
                46,
                'S',
                'M',
                29,
                'L',
                37,
                'XL',
                5,
                'XXL',
                11,
              ];
              const validSkuMinId = 6221130;
              const validSkuMaxid = 6221135;
              const { styles } = currentProduct;
              const styleIds = styles.map(({ id }) => id);
              styleIds.forEach((id) => {
                expect(validStyleIds.includes(id)).to.equal(true);
              });
              const styleNames = currentProduct.styles.map(({ name }) => name);
              styleNames.forEach((name) => {
                expect(validStyleNames.includes(name)).to.equal(true);
              });
              styles.forEach((style) => {
                style.photos.forEach((photo) => {
                  expect(validPhotos.includes(photo.url)).to.equal(true);
                  expect(validPhotos.includes(photo.thumbnail_url)).to.equal(true);
                });
                const skuValues = Object.values(style.skus);
                skuValues.forEach((value) => {
                  expect(validSkuValues.includes(Number(value.quantity))).to.equal(true);
                  expect(validSkuValues.includes(value.size)).to.equal(true);
                });
                const skuIds = Object.keys(style.skus);
                const validSkuids = skuIds.every((id) => Number(id) >= validSkuMinId || Number(id) <= validSkuMaxid);
                expect(validSkuids).to.equal(true);
              });
            });
            it('should contain the styles, photos, and skus data based on product id 600000', async () => {
              const inputId = 600000;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const { styles } = currentProduct;
              expect(styles.length).to.equal(0);
            });
            it('should contain the styles, photos, and skus data based on product id 600001', async () => {
              const inputId = 600001;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const validStyleIds = ['1173688'];
              const validStyleNames = ['Salmon'];
              const validPhotos = [
                'https://images.unsplash.com/photo-1526330563440-3ae2174b6bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80',
                'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80',
                'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80',
                'https://images.unsplash.com/photo-1556812191-381c7e7d96d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1523296357416-a4b3c4b9ee65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1554136920-a1df2909d8f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',

              ];
              const validSkuValues = [
                '7',
                5,
                '7.5',
                23,
                '8',
                16,
                '8.5',
                43,
                '9',
                51,
                '9.5',
                26,
                '10',
                34,
                '10.5',
                39,
                '11',
                1,
                '11.5',
                40,
                '12',
                28,
              ];
              const validSkuMinId = 6784993;
              const validSkuMaxid = 6785003;
              const { styles } = currentProduct;
              const styleIds = styles.map(({ id }) => id);
              styleIds.forEach((id) => {
                expect(validStyleIds.includes(id)).to.equal(true);
              });
              const styleNames = currentProduct.styles.map(({ name }) => name);
              styleNames.forEach((name) => {
                expect(validStyleNames.includes(name)).to.equal(true);
              });
              styles.forEach((style) => {
                style.photos.forEach((photo) => {
                  expect(validPhotos.includes(photo.url)).to.equal(true);
                  expect(validPhotos.includes(photo.thumbnail_url)).to.equal(true);
                });
                const skuValues = Object.values(style.skus);
                skuValues.forEach((value) => {
                  expect(validSkuValues.includes(Number(value.quantity))).to.equal(true);
                  expect(validSkuValues.includes(value.size)).to.equal(true);
                });
                const skuIds = Object.keys(style.skus);
                const validSkuids = skuIds.every((id) => Number(id) >= validSkuMinId || Number(id) <= validSkuMaxid);
                expect(validSkuids).to.equal(true);
              });
            });
            it('should contain the styles, photos, and skus data based on product id 650000', async () => {
              const inputId = 650000;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const validStyleIds = ['1272243', '1272244'];
              const validStyleNames = ['Gold', 'Indigo'];
              const validPhotos = [
                'https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
                'https://images.unsplash.com/photo-1519241978701-4302ab53de1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1536181211993-cf4b2c100475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
                'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
                'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80',
                'https://images.unsplash.com/photo-1558682596-dea9bf84c219?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',

              ];
              const validSkuValues = [
                'One Size',
                0,
                'One Size',
                12,
              ];
              const validSkuMinId = 7355723;
              const validSkuMaxid = 7355724;
              const { styles } = currentProduct;
              const styleIds = styles.map(({ id }) => id);
              styleIds.forEach((id) => {
                expect(validStyleIds.includes(id)).to.equal(true);
              });
              const styleNames = currentProduct.styles.map(({ name }) => name);
              styleNames.forEach((name) => {
                expect(validStyleNames.includes(name)).to.equal(true);
              });
              styles.forEach((style) => {
                style.photos.forEach((photo) => {
                  expect(validPhotos.includes(photo.url)).to.equal(true);
                  expect(validPhotos.includes(photo.thumbnail_url)).to.equal(true);
                });
                const skuValues = Object.values(style.skus);
                skuValues.forEach((value) => {
                  expect(validSkuValues.includes(Number(value.quantity))).to.equal(true);
                  expect(validSkuValues.includes(value.size)).to.equal(true);
                });
                const skuIds = Object.keys(style.skus);
                const validSkuids = skuIds.every((id) => Number(id) >= validSkuMinId || Number(id) <= validSkuMaxid);
                expect(validSkuids).to.equal(true);
              });
            });
            it('should contain the styles, photos, and skus data based on product id 650001', async () => {
              const inputId = 650001;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const validStyleIds = ['1272245', '1272246', '1272247', '1272248'];
              const validStyleNames = ['Green', 'Salmon', 'Ivory', 'Plum'];
              const validPhotos = [
                'https://images.unsplash.com/photo-1520904549193-5ab0027b3fa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
                'https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1562542119-19d015b93c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
                'https://images.unsplash.com/photo-1454177643390-7f100d1bbeec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1554136920-a1df2909d8f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1526113438757-122d6d54da4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1563&q=80',
                'https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1544701758-5241eb611a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
                'https://images.unsplash.com/photo-1554136920-a1df2909d8f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1523296357416-a4b3c4b9ee65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1461551449292-b63f7419ac93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
                'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',

              ];
              const validSkuValues = [
                'XS',
                1,
                'S',
                35,
                'M',
                14,
                'L',
                17,
                'XL',
                25,
                'XXL',
                37,
                21,
                22,
                51,
                16,
                45,
                18,
                6,
                11,
                40,
                12,
                46,
                4,
                23,
                57,
              ];
              const validSkuMinId = 7355725;
              const validSkuMaxid = 7355748;
              const { styles } = currentProduct;
              const styleIds = styles.map(({ id }) => id);
              styleIds.forEach((id) => {
                expect(validStyleIds.includes(id)).to.equal(true);
              });
              const styleNames = currentProduct.styles.map(({ name }) => name);
              styleNames.forEach((name) => {
                expect(validStyleNames.includes(name)).to.equal(true);
              });
              styles.forEach((style) => {
                style.photos.forEach((photo) => {
                  expect(validPhotos.includes(photo.url)).to.equal(true);
                  expect(validPhotos.includes(photo.thumbnail_url)).to.equal(true);
                });
                const skuValues = Object.values(style.skus);
                skuValues.forEach((value) => {
                  expect(validSkuValues.includes(Number(value.quantity))).to.equal(true);
                  expect(validSkuValues.includes(value.size)).to.equal(true);
                });
                const skuIds = Object.keys(style.skus);
                const validSkuids = skuIds.every((id) => Number(id) >= validSkuMinId || Number(id) <= validSkuMaxid);
                expect(validSkuids).to.equal(true);
              });
            });
            it('should contain the styles, photos, and skus data based on product id 700000', async () => {
              const inputId = 700000;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const validStyleIds = ['1370409', '1370410'];
              const validStyleNames = ['Salmon', 'Salmon']; // --->>> provided data error? same name same price
              const validPhotos = [
                'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
                'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
                'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1488778578932-0f84d315fcae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80',
                'https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1516199707327-5399434d0aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1083&q=80',
                'https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
                'https://images.unsplash.com/photo-1499013819532-e4ff41b00669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',

              ];
              const validSkuValues = [
                'XS',
                31,
                'S',
                21,
                'M',
                30,
                'L',
                41,
                'XL',
                9,
                'XXL',
                2,
                38,
                46,
                15,
                13,
              ];
              const validSkuMinId = 7922724;
              const validSkuMaxid = 7922735;
              const { styles } = currentProduct;
              const styleIds = styles.map(({ id }) => id);

              styleIds.forEach((id) => {
                expect(validStyleIds.includes(id)).to.equal(true);
              });
              const styleNames = currentProduct.styles.map(({ name }) => name);
              styleNames.forEach((name) => {
                expect(validStyleNames.includes(name)).to.equal(true);
              });
              styles.forEach((style) => {
                style.photos.forEach((photo) => {
                  expect(validPhotos.includes(photo.url)).to.equal(true);
                  expect(validPhotos.includes(photo.thumbnail_url)).to.equal(true);
                });
                const skuValues = Object.values(style.skus);
                skuValues.forEach((value) => {
                  expect(validSkuValues.includes(Number(value.quantity))).to.equal(true);
                  expect(validSkuValues.includes(value.size)).to.equal(true);
                });
                const skuIds = Object.keys(style.skus);
                const validSkuids = skuIds.every((id) => Number(id) >= validSkuMinId || Number(id) <= validSkuMaxid);
                expect(validSkuids).to.equal(true);
              });
            });
            it('should contain the styles, photos, and skus data based on product id 700001', async () => {
              const inputId = 700001;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const validStyleIds = ['1370411', '1370412'];
              const validStyleNames = ['Olive', 'Salmon'];
              const validPhotos = [
                'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1554921148-83d8ceda2095?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1472186422470-1f3fbde547aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1647&q=80',
                'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80',
                'https://images.unsplash.com/photo-1516199707327-5399434d0aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1531091087823-cb600a47ab79?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1505248254168-1de4e1abfa78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80',
                'https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              ];
              const validSkuValues = [
                'XS',
                46,
                'S',
                47,
                'M',
                16,
                'L',
                11,
                'XL',
                17,
                'XXL',
                30,
                15,
                8,
                27,
                51,
                37,
                49,
              ];
              const validSkuMinId = 7922736;
              const validSkuMaxid = 7922747;
              const { styles } = currentProduct;
              const styleIds = styles.map(({ id }) => id);

              styleIds.forEach((id) => {
                expect(validStyleIds.includes(id)).to.equal(true);
              });
              const styleNames = currentProduct.styles.map(({ name }) => name);
              styleNames.forEach((name) => {
                expect(validStyleNames.includes(name)).to.equal(true);
              });
              styles.forEach((style) => {
                style.photos.forEach((photo) => {
                  expect(validPhotos.includes(photo.url)).to.equal(true);
                  expect(validPhotos.includes(photo.thumbnail_url)).to.equal(true);
                });
                const skuValues = Object.values(style.skus);
                skuValues.forEach((value) => {
                  expect(validSkuValues.includes(Number(value.quantity))).to.equal(true);
                  expect(validSkuValues.includes(value.size)).to.equal(true);
                });
                const skuIds = Object.keys(style.skus);
                const validSkuids = skuIds.every((id) => Number(id) >= validSkuMinId || Number(id) <= validSkuMaxid);
                expect(validSkuids).to.equal(true);
              });
            });
            it('should contain the styles, photos, and skus data based on product id 750000', async () => {
              const inputId = 750000;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const { styles } = currentProduct;
              expect(styles.length).to.equal(0);
            });
            it('should contain the styles, photos, and skus data based on product id 750001', async () => {
              const inputId = 750001;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const validStyleIds = ['1468560', '1468561', '1468562'];
              const validStyleNames = ['White', 'Tan', 'Orchid'];
              const validPhotos = [
                'https://images.unsplash.com/photo-1461551449292-b63f7419ac93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1970&q=80',
                'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1541444446610-749d3299b35e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1459501462159-97d5bded1416?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80',
                'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
                'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
                'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1548861216-17dd1ac80d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1465124982537-9f918f1e1aaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',

              ];
              const validSkuValues = [
                'One Size',
                35,
                4,
                27,
              ];
              const validSkuMinId = 8490740;
              const validSkuMaxid = 1468562;
              const { styles } = currentProduct;
              const styleIds = styles.map(({ id }) => id);

              styleIds.forEach((id) => {
                expect(validStyleIds.includes(id)).to.equal(true);
              });
              const styleNames = currentProduct.styles.map(({ name }) => name);
              styleNames.forEach((name) => {
                expect(validStyleNames.includes(name)).to.equal(true);
              });
              styles.forEach((style) => {
                style.photos.forEach((photo) => {
                  expect(validPhotos.includes(photo.url)).to.equal(true);
                  expect(validPhotos.includes(photo.thumbnail_url)).to.equal(true);
                });
                const skuValues = Object.values(style.skus);
                skuValues.forEach((value) => {
                  expect(validSkuValues.includes(Number(value.quantity))).to.equal(true);
                  expect(validSkuValues.includes(value.size)).to.equal(true);
                });
                const skuIds = Object.keys(style.skus);
                const validSkuids = skuIds.every((id) => Number(id) >= validSkuMinId || Number(id) <= validSkuMaxid);
                expect(validSkuids).to.equal(true);
              });
            });
            it('should contain the styles, photos, and skus data based on product id 800000', async () => {
              const inputId = 800000;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const { styles } = currentProduct;
              expect(styles.length).to.equal(0);
            });
            it('should contain the styles, photos, and skus data based on product id 800001', async () => {
              const inputId = 800001;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const validStyleIds = ['1566019', '1566020'];
              const validStyleNames = ['Red', 'Tan'];
              const validPhotos = [
                'https://images.unsplash.com/photo-1515110371136-7e393289662c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1656&q=80',
                'https://images.unsplash.com/photo-1554735490-80893c93b06f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1554735490-80893c93b06f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1560072810-1cffb09faf0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'uhttps://images.unsplash.com/photo-1515243061678-14fc18b93935?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
                'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',

              ];
              const validSkuValues = [
                'One Size',
                29,
                48,
              ];
              const validSkuMinId = 9054614;
              const validSkuMaxid = 9054615;
              const { styles } = currentProduct;
              const styleIds = styles.map(({ id }) => id);

              styleIds.forEach((id) => {
                expect(validStyleIds.includes(id)).to.equal(true);
              });
              const styleNames = currentProduct.styles.map(({ name }) => name);
              styleNames.forEach((name) => {
                expect(validStyleNames.includes(name)).to.equal(true);
              });
              styles.forEach((style) => {
                style.photos.forEach((photo) => {
                  expect(validPhotos.includes(photo.url)).to.equal(true);
                  expect(validPhotos.includes(photo.thumbnail_url)).to.equal(true);
                });
                const skuValues = Object.values(style.skus);
                skuValues.forEach((value) => {
                  expect(validSkuValues.includes(Number(value.quantity))).to.equal(true);
                  expect(validSkuValues.includes(value.size)).to.equal(true);
                });
                const skuIds = Object.keys(style.skus);
                const validSkuids = skuIds.every((id) => Number(id) >= validSkuMinId || Number(id) <= validSkuMaxid);
                expect(validSkuids).to.equal(true);
              });
            });
            it('should contain the styles, photos, and skus data based on product id 850000', async () => {
              const inputId = 850000;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const validStyleIds = ['1663698', '1663699', '1663700', '1663701', '1663702'];
              const validStyleNames = ['Silver', 'Lavender', 'Maroon', 'Red', 'Plum'];
              const validPhotos = [
                'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
                'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80',
                'https://images.unsplash.com/photo-1558014356-f7c41bc744f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
                'https://images.unsplash.com/photo-1548369735-f548cbe6a294?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1554921148-83d8ceda2095?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
                'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
                'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1512023983263-7e94bf6b913e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1531889947080-bc5693ae9fa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
                'https://images.unsplash.com/photo-1558118070-09ba9a9efb2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1498168208808-4c2706938a2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80',
                'https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
                'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80',
                'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1500340520802-1687634cbe38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
                'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80',
                'https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1531091087823-cb600a47ab79?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
                'https://images.unsplash.com/photo-1547257965-087be799b084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1490427712608-588e68359dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1522032238811-74bc59578599?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
              ];
              const validSkuValues = [
                'XS',
                36,
                'S',
                3,
                'M',
                35,
                'L',
                26,
                'XL',
                47,
                'XXL',
                28,
                9,
                0,
                39,
                49,
                58,
                18,
                23,
                25,
                8,
                46,
                30,
                20,
                57,
                1,
                52,
                40,
                22,
                15,
              ];
              const validSkuMinId = 9620298;
              const validSkuMaxid = 9620327;
              const { styles } = currentProduct;
              const styleIds = styles.map(({ id }) => id);

              styleIds.forEach((id) => {
                expect(validStyleIds.includes(id)).to.equal(true);
              });
              const styleNames = currentProduct.styles.map(({ name }) => name);
              styleNames.forEach((name) => {
                expect(validStyleNames.includes(name)).to.equal(true);
              });
              styles.forEach((style) => {
                style.photos.forEach((photo) => {
                  expect(validPhotos.includes(photo.url)).to.equal(true);
                  expect(validPhotos.includes(photo.thumbnail_url)).to.equal(true);
                });
                const skuValues = Object.values(style.skus);
                skuValues.forEach((value) => {
                  expect(validSkuValues.includes(Number(value.quantity))).to.equal(true);
                  expect(validSkuValues.includes(value.size)).to.equal(true);
                });
                const skuIds = Object.keys(style.skus);
                const validSkuids = skuIds.every((id) => Number(id) >= validSkuMinId || Number(id) <= validSkuMaxid);
                expect(validSkuids).to.equal(true);
              });
            });
            it('should contain the styles, photos, and skus data based on product id 850001', async () => {
              const inputId = 850001;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const { styles } = currentProduct;
              expect(styles.length).to.equal(0);
            });
            it('should contain the styles, photos, and skus data based on product id 900000', async () => {
              const inputId = 900000;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const validStyleIds = ['1761759'];
              const validStyleNames = ['Orange'];
              const validSkuValues = [
                'XS',
                53,
                'S',
                31,
                'M',
                27,
                'L',
                44,
                'XL',
                11,
                'XXL',
                5,
              ];
              const validSkuMinId = 10185549;
              const validSkuMaxid = 10185554;
              const { styles } = currentProduct;
              const styleIds = styles.map(({ id }) => id);
              styleIds.forEach((id) => {
                expect(validStyleIds.includes(id)).to.equal(true);
              });
              const styleNames = currentProduct.styles.map(({ name }) => name);
              styleNames.forEach((name) => {
                expect(validStyleNames.includes(name)).to.equal(true);
              });
              styles.forEach((style) => {
                expect(style.photos.length).to.equal(0);
                const skuValues = Object.values(style.skus);
                skuValues.forEach((value) => {
                  expect(validSkuValues.includes(Number(value.quantity))).to.equal(true);
                  expect(validSkuValues.includes(value.size)).to.equal(true);
                });
                const skuIds = Object.keys(style.skus);
                const validSkuids = skuIds.every((id) => Number(id) >= validSkuMinId || Number(id) <= validSkuMaxid);
                expect(validSkuids).to.equal(true);
              });
            });
            it('should contain the styles, photos, and skus data based on product id 900001', async () => {
              const inputId = 900001;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const { styles } = currentProduct;
              expect(styles.length).to.equal(0);
            });
            it('should contain the styles, photos, and skus data based on product id 950000', async () => {
              const inputId = 950000;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const validStyleIds = ['1859941', '1859942', '1859943', '1859944', '1859945', '1859946'];
              const validStyleNames = ['Ivory', 'Pink', 'Gold', 'Violet', 'Yellow', 'Silver'];
              const validSkuValues = [
                'XS',
                6,
                'S',
                16,
                'M',
                47,
                'L',
                29,
                'XL',
                24,
                'XXL',
                55,
                55,
                27,
                10,
                39,
                40,
                25,
                28,
                41,
                1,
                32,
                4,
                15,
                48,
                1,
                50,
                9,
                52,
                36,
                21,
                18,
                44,
                56,
                31,
                51,
              ];

              const validSkuMinId = 10753966;
              const validSkuMaxid = 10754001;
              const { styles } = currentProduct;
              const styleIds = styles.map(({ id }) => id);
              styleIds.forEach((id) => {
                expect(validStyleIds.includes(id)).to.equal(true);
              });
              const styleNames = currentProduct.styles.map(({ name }) => name);
              styleNames.forEach((name) => {
                expect(validStyleNames.includes(name)).to.equal(true);
              });
              styles.forEach((style) => {
                expect(style.photos.length).to.equal(0);
                const skuValues = Object.values(style.skus);
                skuValues.forEach((value) => {
                  expect(validSkuValues.includes(Number(value.quantity))).to.equal(true);
                  expect(validSkuValues.includes(value.size)).to.equal(true);
                });
                const skuIds = Object.keys(style.skus);
                const validSkuids = skuIds.every((id) => Number(id) >= validSkuMinId || Number(id) <= validSkuMaxid);
                expect(validSkuids).to.equal(true);
              });
            });
            it('should contain the styles, photos, and skus data based on product id 950001', async () => {
              const inputId = 950001;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const validStyleIds = ['1859947'];
              const validStyleNames = ['Yellow'];
              const validSkuValues = [
                'XS',
                42,
                'S',
                1,
                'M',
                53,
                'L',
                38,
                'XL',
                50,
                'XXL',
                16,
              ];

              const validSkuMinId = 10754002;
              const validSkuMaxid = 10754007;
              const { styles } = currentProduct;
              const styleIds = styles.map(({ id }) => id);
              styleIds.forEach((id) => {
                expect(validStyleIds.includes(id)).to.equal(true);
              });
              const styleNames = currentProduct.styles.map(({ name }) => name);
              styleNames.forEach((name) => {
                expect(validStyleNames.includes(name)).to.equal(true);
              });
              styles.forEach((style) => {
                expect(style.photos.length).to.equal(0);
                const skuValues = Object.values(style.skus);
                skuValues.forEach((value) => {
                  expect(validSkuValues.includes(Number(value.quantity))).to.equal(true);
                  expect(validSkuValues.includes(value.size)).to.equal(true);
                });
                const skuIds = Object.keys(style.skus);
                const validSkuids = skuIds.every((id) => Number(id) >= validSkuMinId || Number(id) <= validSkuMaxid);
                expect(validSkuids).to.equal(true);
              });
            });
            it('should contain the styles, photos, and skus data based on product id 1,000,011 - *last product id in products csvs*', async () => {
              const inputId = 1000011;
              const product = await db.models.Product.find({ id: inputId });
              const currentProduct = product[0];
              const validStyleIds = ['1958098', '1958099', '1958100', '1958101', '1958102'];
              const validStyleNames = ['Ivory', 'Magenta', 'Orchid', 'Blue', 'Lavender'];
              const validSkuValues = [
                '7',
                2,
                '7.5',
                54,
                '8',
                8,
                '8.5',
                48,
                '9',
                23,
                '9.5',
                28,
                '10',
                10,
                '10.5',
                33,
                '11',
                52,
                '11.5',
                36,
                '12',
                6,
                24,
                16,
                47,
                4,
                29,
                14,
                8,
                51,
                53,
                41,
                58,
                44,
                26,
                1,
                50,
                32,
                4,
                45,
                21,
                22,
                6,
                20,
                38,
                12,
                17,
                0,
                5,
                15,
                37,
                7,
              ];
              const validSkuMinId = 11323863;
              const validSkuMaxid = 11323917;
              const { styles } = currentProduct;
              const styleIds = styles.map(({ id }) => id);
              styleIds.forEach((id) => {
                expect(validStyleIds.includes(id)).to.equal(true);
              });
              const styleNames = currentProduct.styles.map(({ name }) => name);
              styleNames.forEach((name) => {
                expect(validStyleNames.includes(name)).to.equal(true);
              });
              styles.forEach((style) => {
                expect(style.photos.length).to.equal(0);
                const skuValues = Object.values(style.skus);
                skuValues.forEach((value) => {
                  expect(validSkuValues.includes(Number(value.quantity))).to.equal(true);
                  expect(validSkuValues.includes(value.size)).to.equal(true);
                });
                const skuIds = Object.keys(style.skus);
                const validSkuids = skuIds.every((id) => Number(id) >= validSkuMinId || Number(id) <= validSkuMaxid);
                expect(validSkuids).to.equal(true);
              });
            });
          });
        });
      });
    });
  });
});
