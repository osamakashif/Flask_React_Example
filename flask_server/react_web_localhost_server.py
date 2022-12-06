# Import flask and datetime module for showing date and time
from flask import Flask
import socket
import requests

hostname = socket.gethostname()
source_ip = socket.gethostbyname(hostname)
  
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
      
# Running ReactJS web localhost server
if __name__ == '__main__':
    server.run(port=5000, debug=True)# Host IP address needs to match with that of React Native Expo app.