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
    default_price INT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    Primary Key (product_key)
  )
  CREATE INDEX ON products(product_id)
  CREATE TABLE styles (
    style_key UUID DEFAULT uuid_generate_v4 (),
    id INT NOT NULL UNIQUE,
    productId INT REFERENCES products (product_id),
    product_name VARCHAR(50),
    sale_price VARCHAR(10),
    original_price VARCHAR(10),
    default_style SMALLINT,
    Primary Key (style_key)
  )
  CREATE INDEX ON styles(productId)
  CREATE TABLE photos (
    photo_key UUID DEFAULT uuid_generate_v4 (),
    id INT NOT NULL UNIQUE,
    styleId INT REFERENCES styles (id),
    style_url text,
    thumbnail_url text,
    Primary Key (photo_key)
  )
  CREATE INDEX ON photos(styleId)
  CREATE TABLE skus (
    sku_key UUID DEFAULT uuid_generate_v4 (),
    id INT NOT NULL UNIQUE,
    styleId INT REFERENCES styles(id),
    size VARCHAR(10),
    quantity SMALLINT,
    Primary Key (sku_key)
  )
  CREATE INDEX ON skus(styleId)

