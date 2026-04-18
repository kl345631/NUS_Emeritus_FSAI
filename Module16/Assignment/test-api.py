import requests


url = "http://localhost:5000/api/predict"

# test data
payload = {
    "feature1": 25,
    "feature2": 14
}

print(f"Sending request to: {url}")

try:
    # send POST request
    response = requests.post(url, json=payload)
    
    # Check if successful
    if response.status_code == 200:
        print("Success!")
        print(f"Response Data: {response.json()}")
    else:
        print(f"Failed with status code: {response.status_code}")
        print(f"Error Message: {response.text}")

except Exception as e:
    print(f"📡 Connection Error: {e}")