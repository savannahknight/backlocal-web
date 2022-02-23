package com.backlocal;

public record RainResponse(
        Integer limit,
        Integer total_rows,
        Integer all_products,
        RainProduct[] data ) {

}
