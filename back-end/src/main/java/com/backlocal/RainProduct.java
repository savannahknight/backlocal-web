package com.backlocal;

public record RainProduct(
        String title,
        String alias,
        int product_id,
        int pslr_id,
        int department_id,
        String image,
        int sku,
        int upc,
        String mfgId,
        int inventory,
        double min_price,
        double max_price,
        String status,
        int pslr_count,
        double in_stock,
        double negative_in_stock,
        String product_status,
        int all_skus,
        int all_upcs,
        int all_manufacturer_ids,
        int all_pslr_ids,
        boolean is_variation_product,
        String[] all_conditions,
        String availability,
        double price_item,
        String manufacturer_name,
        String manufacturer_product_id,
        int store_id,
        int store_location_id,
        boolean need_review
                          ) {


}
