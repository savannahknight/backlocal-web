package com.backlocal;

import javax.persistence.*;
import javax.persistence.Id;


public class Product {
  private long productId;
  private String sku;
  private String title;
  private String description;
  private String landingPageURL; //todo: see if this is given in JSON string
  private String imageURL;
  private String variation;
  private Integer price;

  public Product(){}

  public long getProductId() {return productId;}

  public void setProductId(long productId) {this.productId=productId;}
  @Column(name="sku")
  public String getSku() {
    return sku;
  }

  public void setSku(String sku) {
    this.sku=sku;
  }
  @Column(name="title")
  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title=title;
  }
  @Column(name="description")
  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description=description;
  }
  @Column(name="website_url")
  public String getLandingPageURL() {
    return landingPageURL;
  }

  public void setLandingPageURL(String landingPageURL) {
    this.landingPageURL=landingPageURL;
  }
  @Column(name="image_url")
  public String getImageURL() {
    return imageURL;
  }

  public void setImageURL(String imageURL) {
    this.imageURL=imageURL;
  }
  @Column(name="variation")
  public String getVariation() {
    return variation;
  }

  public void setVariation(String variation) {
    this.variation=variation;
  }
  @Column(name="price")
  public Integer getPrice() {
    return price;
  }

  public void setPrice(Integer price) {
    this.price=price;
  }


}