# Import flask and datetime module for showing date and time
from flask import Flask
import datetime
  
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
  
      
# Running app
if __name__ == '__main__':
    server.run(debug=True)