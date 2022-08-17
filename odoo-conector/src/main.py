from flask import Flask, request
from flask_cors import CORS
import xmlrpc.client
import json

app = Flask(__name__)
CORS(app)
cors = CORS(app, resources={
  r"/*":{
    "origins":"*"
  }
})

URL = 'http://localhost:8069'
DB = 'ODOO_DB_1'
USER_NAME = 'lmoroco@gmail.com'
PASS = 'root'

common = xmlrpc.client.ServerProxy('{}/xmlrpc/2/common'.format(URL))
uid = common.authenticate(DB, USER_NAME, PASS, {})
model = xmlrpc.client.ServerProxy('{}/xmlrpc/2/object'.format(URL))

@app.route('/')
def index():
  return '<h1> SERVER GET-DATA-ODOO </h1>'

@app.route('/data', methods=['GET'])
def getDataFromOdoo():
  res = model.execute_kw(DB, uid, PASS, 
      'res.partner', 
      'search_read', 
      [], {'fields': ['name', 
      'country_id', 'phone','street','email']})
      
  return json.dumps(res)

@app.route('/add', methods=['POST'])
def add():
  id = model.execute_kw(DB, uid, PASS, 'res.partner', 'create', [{
    'name': request.json['name'],
    'phone': request.json['phone'],
    'street': request.json['street'],
    'email': request.json['email']}])
  return 'OK'

if __name__ == "__main__":
  app.run(port=8000, debug=True)
