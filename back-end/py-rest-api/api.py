# from typing import Optional
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json
import requests
from database import SessionLocal
import models

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

class Key(BaseModel):
    api: str
    keyPass: str

class Item(BaseModel):
    id: int
    prod_name: str
    prod_description: str
    price: str
    
    class Config:
        orm_mode=True
    
db = SessionLocal()

prod_list = []
vari_list = []

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"status": "running"}

@app.get("/show")
def show_data():
    items = db.query(models.Item).all()
    return items


@app.get("/create")
def get_data():
    #api key: 0dcb9e6180891de29b549349a4b43cf8
    #api password: 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
    # r = requests.get(f"https://{apikey.api}:{apikey.keyPass}@3b-shop.myshopify.com/admin/api/2022-01/products.json")
    r = requests.get(f"https://0dcb9e6180891de29b549349a4b43cf8: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@3b-shop.myshopify.com/admin/api/2022-01/products.json")
    resp = r.json() 
    for i in resp["products"]:
        title = i["title"]
        descrip = i["body_html"]
        # vari_length = len(i["variants"])
        price = i["variants"][0]["price"]
        # if vari_length > 1:
        #     for x in range(vari_length):
        #         price = {i["variants"][x]["price"]}
        #         title = {i["variants"][x]["title"]}
        #         _id = {i["variants"][x]["id"]}
        #         vari = {"price": price, "title": title, "id": _id}
        #         vari_list.append(vari)
            
        
        new_item=models.Item(prod_name=title, prod_description=descrip, prod_price=price)
        db.add(new_item)
        db.commit()

    return {"status": "success"}