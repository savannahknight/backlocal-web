package com.backlocal;

public record Product (
        String sku,
        String title,
        String description,
        String landingPageURL, //todo: see if this is given in JSON string
        String imageURL,
        String variation,
        Integer price ) {

}