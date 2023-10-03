import requests

url = "http://localhost:3000/api/users/4"

res = requests.delete(url)
users = {'id':4,'username':'Ade','password':'23232322','code':2121,'image':'IIIIIIIIII'}
tasks = {'id':3,'name': 'Ezee', 'type': 'Software', 'status': 'in progress', 'assign': 'Isreal', 'ob': '100'}

# res = requests.put(url, json= users)
# from plyer import notification

# print(res.json())
for d in res.json():
    print(d)
# notification.notify(
#     title = 'testing',
#     message = 'message',
#     app_icon = None,
#     timeout = 10,
# )