package com.backlocal;

import org.hibernate.SessionFactory;

import java.io.Serializable;

public class ProductDao<T, Id extends Serializable> {
  private SessionFactory sessionFactory;
}
