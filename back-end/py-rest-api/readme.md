# About

## shop-req.py:
this is the py file that pulls a request from the shopify api to get all the products. It also parses the json and creates a new array with the dictionaries of the products and the variations. It's being printed out into a pandas dataframe rn to make it more readable but I will integrate it into the rest api soon

## resp.json
this is a practice json response so we don't use up the api calls while testing. follow the instructions in the py file to switch between the practice and the real api calls

## api.py
I need to get better with naming but this is a rest api that will implement the shop-req.py file to pull the info. Rn i've only set up cors to help us secure the endpoint a little. I'll implement a python orm this weekend to connect to a db so it can save the responses. the orm supports any python sqlalchemy database [PostgreSQL, MySQL, SQLite, Oracle, Microsoft SQL Server, etc.] I can also probably link it with mongodb if we want to switch over to document based data storage. (still looking for a way to connect to databricks)

Running the server:
uvicorn api:app --reload


# Setup:
1. Install Python! Mac OS has python 2.7 preinstalled but you'll need to install 3.10 or the latest

2. run 'pip3 install virutualenv'

3. run 'virtualenv [the name of your environment]' and then cd into it

4. activate you environment by running 'source [name of your environment]/bin/activate' (to exit just run 'deactivate')

5. when you're in your environment run 'pip3 install -r requirements.txt' to install all the dependencies you need.

6. run the server to test and if it works then you're set!

virtualenv is the python equivalent of the node modules folder in a javascript project. once you're done just delete it and you should be good. this will stop you from downloading weird py modules that slowdown your system.