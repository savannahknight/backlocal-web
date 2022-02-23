package com.backlocal;

import java.io.IOException;
import java.net.Authenticator;
import java.net.CookieHandler;
import java.net.ProxySelector;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.Executor;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import okhttp3.*;
import org.springframework.http.HttpLogging;

import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLParameters;

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
      String cookie=getCookie(credential.posUsername(), credential.posPassword());
      //String cookie = "PHPSESSID=3644638209bca9353bad42539fa8830d;";
      //String cookie = "PHPSESSID=a05a39933eb5009af8897d8221a5f608;";
      System.out.println("The cookie: " + cookie);

      String content = getContent(cookie);
      System.out.println("JSON String: " + content);

      RainResponse rainResponse = new ObjectMapper().configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false).readValue(content, RainResponse.class);
      //convert rainResponse.data to Product and add it to the products set
      String sku = rainResponse.data()[0].sku();
      //new Product(sku, );
      System.out.println("rainResponse: " + new ObjectMapper().writeValueAsString(rainResponse));
    }catch (IOException e ) {
      e.printStackTrace();
    }
    return products;
  }
  private String getCookie(String posUsername, String posPassword) throws IOException{
    final OkHttpClient client = new OkHttpClient.Builder().build();
    final String urlToScrape = "https://www.rainadmin.com/site-configuration/auth/login-process.php";
    RequestBody requestBody = new FormBody.Builder()
            .add("username", posUsername)
            .add("password", posPassword)
            .add("submitBtn", "Login")
            .build();
    Request request = new Request.Builder().addHeader("Content-Type", "application/x-www-form-urlencoded").url(urlToScrape).post(requestBody).build();
    final Response response = client.newCall(request).execute();
    String cookie = response.header("set-cookie");
    String[] array = cookie.split(" ");

    //System.out.println("message: " + response.code());
    return array[0];
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
