import requests

url = "https://api.green-api.com/waInstance7103923604/sendMessage/7084b6f15e924ffcaeeaf4bc828d6ed2a242b1f57d8a4decbe"

payload = {
            "chatId": "919426034129@c.us"
           ,"message": "I use Green-API to send this message to you!"}
headers = {
'Content-Type': 'application/json'
}

response = requests.post(   url, headers=headers, json = payload)

print(response.text.encode('utf8'))