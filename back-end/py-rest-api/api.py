# from typing import Optional
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json
import requests

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

class Key(BaseModel):
    api: str
    keyPass: str

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

@app.get("/show-data/")
def show_data():
    return prod_list


@app.post("/get-data/")
def get_data(apikey: Key):
    #api key: 0dcb9e6180891de29b549349a4b43cf8
    #api password: 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
    r = requests.get(f"https://{apikey.api}:{apikey.keyPass}@3b-shop.myshopify.com/admin/api/2022-01/products.json")
    resp = r.json() 
    for i in resp["products"]:
        title = i["title"]
        descrip = i["body_html"]
        vari_length = len(i["variants"])
        vari_list = []
        if vari_length > 1:
            for x in range(vari_length):
                price = {i["variants"][x]["price"]}
                title = {i["variants"][x]["title"]}
                _id = {i["variants"][x]["id"]}
                vari = {"price": price, "title": title, "id": _id}
                vari_list.append(vari)
            
        
        prod_list.append({"prod_title":title, "prod_descrip": descrip, "prod_price":vari_list})

    return {"status": "success"}