package com.backlocal;

public record RainProduct(
        String title,
        String alias,
        Integer product_id,
        Integer pslr_id,
        Integer department_id,
        String image,
        String sku,
        String upc,
        String mfgId,
        Integer inventory,
        Double min_price,
        Double max_price,
        String status,
        Integer pslr_count,
        Double in_stock,
        Double negative_in_stock,
        String product_status,
        String all_skus,
        String all_upcs,
        String all_manufacturer_ids,
        String all_pslr_ids,
        Boolean is_variation_product,
        String[] all_conditions,
        String availability,
        Double price_item,
        String manufacturer_name,
        String manufacturer_product_id,
        Integer store_id,
        Integer store_location_id,
        Boolean need_review
                          ) {


}
