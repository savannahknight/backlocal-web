package com.backlocal;

import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import okhttp3.*;
import okio.BufferedSink;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class Rain implements POSSystem {
  private POSCredential credential;

  public Rain(POSCredential credential) {
    this.credential = credential;
  }

  @Override
  public Set<Product> getProducts() {
    Set<Product> products = new HashSet<>();
    try {
      System.out.println("Rain username: " + credential.posUsername());
      //String cookie=getCookie(credential.posUsername(), credential.posPassword());
      String cookie = "PHPSESSID=dad421af56415a87c72127322e8c2fbd;";
      System.out.println("The cookie: " + cookie);

      String content = getContent(cookie);
      System.out.println("JSON String: " + content);
    }catch (IOException e ) {
      e.printStackTrace();
    }
    return products;
  }
  private String getCookie(String posUsername, String posPassword) throws IOException{
    final OkHttpClient client = new OkHttpClient.Builder().build();
    final String urlToScrape = "https://www.rainadmin.com/site-configuration/auth/login-process.php";
    RequestBody requestBody = new FormBody(List.of("username", "password", "submitBtn"), List.of(posUsername, posPassword, "Login"));
    final Request request = new Request.Builder().url(urlToScrape).post(requestBody).build();
    final Response response = client.newCall(request).execute();
    return response.header("set-cookie");
    //String.split(" ")[0] to get just th session id and not the http part on the end....stop split when there is a space
    //use library Jackon to deserialize JSON
    //RainResponse rainResponse = new ObjectMapper().readValue(jsonString, RainResponse.class);
  }
  private String getContent(String cookie) throws IOException {
    final OkHttpClient client = new OkHttpClient.Builder().build();
    Headers headers = Headers.of("cookie", cookie);
    final String urlToScrape = "https://www.rainadmin.com/site-configuration/products/api/index.php?limit=100&page=1&storeLocationId=28405&ids=48702623%2C48702624%2C48702631%2C48702634%2C48702665%2C48702677%2C48702680%2C48702700%2C48702714%2C48702715%2C48702725%2C48702757%2C48702758%2C48702759%2C48702760%2C48702762%2C48702766%2C48702772%2C48702786%2C48702908%2C48702924%2C48702942%2C48702950%2C48703000%2C48703001%2C48703013%2C48703021%2C48703023%2C49600642%2C49625271%2C49625392%2C51114085%2C51484841%2C52771985%2C54922550%2C57893535%2C58101022%2C58446650%2C58950638";
    final Request request = new Request.Builder().url(urlToScrape).headers(headers).build();
    final Response response = client.newCall(request).execute();
    return response.body().string();
  }
  private String extractTitle(String content) {
    final Pattern titleRegExp = Pattern.compile("<title>(.*?)</title>", Pattern.DOTALL); //<td class"prod_list_title">
    final Matcher matcher = titleRegExp.matcher(content);
    matcher.find();
    return matcher.group(1);
  }
  //retrieve items method...take username and password and return list of items
}
