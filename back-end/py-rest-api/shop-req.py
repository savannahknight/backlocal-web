import requests
import json

prod_list = []
# with open('resp.json') as file:
#     data = file.read()
#     resp = json.loads(data)
# If you're using the json request comment everything above this comment, stopping at the with 'with open('resp.json') as file:'
r = requests.get("https://0dcb9e6180891de29b549349a4b43cf8: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@3b-shop.myshopify.com/admin/api/2022-01/products.json")
resp = r.json() 
# ^^Uncomment this to pull from shopify api
for i in resp["products"]:
    title = i["title"]
    descrip = i["body_html"]
    vari_length = len(i["variants"])
    if vari_length > 1:
        for x in range(vari_length):
            quantity = i["variants"][x]["inventory_quantity"]
            prod_id = i["variants"][x]["id"]
            price = i["variants"][x]["price"]
            prod_list.append(json.dumps({"store_code":"75599","id":prod_id, "prod_title":title, "prod_descrip": descrip, "quantity": quantity, "price":price}))
    else:
        for x in range(vari_length):
            quantity = i["variants"][x]["inventory_quantity"]
            prod_id = i["variants"][x]["id"]
            price = i["variants"][x]["price"]
        
    prod_list.append(json.dumps({"store_code":"75599","id":prod_id, "prod_title":title, "prod_descrip": descrip, "quantity": quantity, "price":price}))

print(prod_list)