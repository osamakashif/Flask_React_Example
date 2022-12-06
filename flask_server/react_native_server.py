# Import flask and datetime module for showing date and time
from flask import Flask
import datetime
import socket
import requests

hostname = socket.gethostname()
source_ip = socket.gethostbyname(hostname)

ip_addr = '' # May need to explicitly give an IP address to work with React Native, should be the same IP as that.
if ip_addr == '':
    ip_addr = socket.gethostbyname(hostname)
  
# Initializing flask app
server = Flask(__name__)
  
  
# Route for seeing a data
@server.route('/date')
def get_date():
    try:
        url = "http://"+source_ip+":4000/date"
        r = requests.get(url)
        return r.json()
    except:
        pass
  
      
# Running React Native server
if __name__ == '__main__':
    server.run(host=ip_addr, port=5000, debug=True) # Host IP address needs to match with that of React Native Expo app.