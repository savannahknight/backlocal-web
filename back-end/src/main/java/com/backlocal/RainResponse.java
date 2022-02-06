package com.backlocal;

public record RainResponse(
        int limit,
        int total_rows,
        int all_products,
        RainProduct[] data ) {

}
