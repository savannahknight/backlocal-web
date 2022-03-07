import requests
import json
import pandas as pd

prod_list = []
with open('resp.json') as file:
    data = file.read()
    resp = json.loads(data)
# If you're using the json request comment everything above this comment, stopping at the with 'with open('resp.json') as file:'
# r = requests.get("https://0dcb9e6180891de29b549349a4b43cf8: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@3b-shop.myshopify.com/admin/api/2022-01/products.json")
# resp = r.json() 
# ^^Uncomment this to pull from shopify api
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
        else:
            price_list = i["variants"][0]["price"]
            
        
        prod_list.append({"prod_title":title, "prod_descrip": descrip, "prod_price":vari_list})

df = pd.DataFrame(prod_list)

print(df)
# print(price_list)
# for i in prod_list:
#     print(i)    