CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE SCHEMA overview_schema
  AUTHORIZATION rob
  CREATE TABLE products (
    product_key UUID DEFAULT uuid_generate_v4 (),
    product_id INT NOT NULL UNIQUE,
    product_name VARCHAR(50),
    product_slogan VARCHAR(255),
    product_description text,
    product_category VARCHAR(25),
    product_default_price INT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    Primary Key (product_key)
  )
  CREATE INDEX ON products(product_id)
  CREATE TABLE features (
    feature_key UUID DEFAULT uuid_generate_v4 (),
    feature_id INT NOT NULL UNIQUE,
    feature_product_id_ref INT REFERENCES products (product_id),
    feature VARCHAR(50),
    feature_value VARCHAR(50),
    Primary Key (feature_key)
  )
  CREATE INDEX ON features(feature_product_id_ref)

  CREATE TABLE styles (
    style_key UUID DEFAULT uuid_generate_v4 (),
    style_id INT NOT NULL UNIQUE,
    style_productId_ref INT REFERENCES products (product_id),
    style_name VARCHAR(50),
    style_sale_price VARCHAR(10),
    style_original_price VARCHAR(10),
    style_default_style SMALLINT,
    Primary Key (style_key)
  )
  CREATE INDEX ON styles(style_productId_ref)
  CREATE TABLE photos (
    photo_key UUID DEFAULT uuid_generate_v4 (),
    photo_id INT NOT NULL UNIQUE,
    photo_styleId_ref INT REFERENCES styles (style_id),
    photo_url text,
    photo_thumbnail_url text,
    Primary Key (photo_key)
  )
  CREATE INDEX ON photos(photo_styleId_ref)
  CREATE TABLE skus (
    sku_key UUID DEFAULT uuid_generate_v4 (),
    sku_id INT NOT NULL UNIQUE,
    sku_styleId_ref INT REFERENCES styles(style_id),
    sku_size VARCHAR(10),
    sku_quantity SMALLINT,
    Primary Key (sku_key)
  )
  CREATE INDEX ON skus(sku_styleId_ref)


