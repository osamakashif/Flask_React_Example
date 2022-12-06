# Import flask and datetime module for showing date and time
from flask import Flask
import datetime
import socket

hostname = socket.gethostname()
ip_addr = socket.gethostbyname(hostname)
x = datetime.datetime.now()

# Initializing flask app
server = Flask(__name__)
# Route for seeing a data
@server.route('/date')
def get_date():
    # Returning an api for showing in  reactjs
    return {
        "Day":x.weekday(),
        "Date":x.day,
        "Month":x.month, 
        "Year":x.year
        }

# Running server
if __name__ == '__main__':
    server.run(host=ip_addr, port=4000, debug=True) # Host IP address needs to match with that of React Native Expo app.