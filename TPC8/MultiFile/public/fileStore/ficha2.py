import requests as req
import json
import cx_Oracle as orc
import config
import sys
import time

SENSORS = [3001, 3002, 3003, 3004, 3005]
MODE = ""
TIME = 0

sensor_info = {}

# ----- ARGUMENT VALIDATION -----

if sys.argv.__len__() > 1 and sys.argv[1] in ['insert', 'update']:
    if sys.argv[1] == "update":
        try:
            TIME = int(sys.argv[2])
        except Exception as e:
            print('Error: The second input needs to be an Integer value.\n Example: ficha2.py update [MINUTES]')
            exit()

    MODE = sys.argv[1]
else:
    print('Error: Wrong syntax.\n Example: ficha2.py [insert|update] [MINUTES]')
    exit()

# -------------------------------

print('---------- FETCHING DATA ----------\n')
print(f'Sensors: {", ".join(list(map(lambda x: str(x),SENSORS)))}\n')


# Fetching sensor data from the sensor API.
for sensor in SENSORS:

    start_time = time.time()

    resp = req.get(f'http://nosql.hpeixoto.me/api/sensor/{sensor}')

    print(f'Sensor |{sensor}|: Responded with status code [{resp.status_code}]')

    if(resp.status_code >= 400):
        print(f'\t - Data could not be retreieved!')

    else:
        print(f'\t - Data from sensor converted to JSON.')
        sensor_info[sensor] = json.loads(resp.text)

    print(f'\t - Elapsed time -> {round(time.time() - start_time, 4)}\n')

# Cheking if any data was retrieved from the API. One sensor needs to respond for the script to continue
# with the data insert/update to the oracleDB.
if(sensor_info == {}):
    print(' -> No data was received. (Exited, skipped JSON to OracleDB)')
    exit()



print('---------- JSON TO ORACLE ----------\n')

# Taking the sensors data and adding/updating to oracleDB.
try:
    with orc.connect(config.USERNAME, config.PASSWORD, config.DSN, encoding=config.ENCODING) as db:
        pass

except Exception as e:
    print(f'Error of connecting to the database: {e}')
    

