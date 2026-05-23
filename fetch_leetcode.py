import urllib.request
import json

url = 'https://leetcode.com/graphql'
data = {
    'query': 'query getUserProfile($username: String!) { matchedUser(username: $username) { submitStats: submitStatsGlobal { acSubmissionNum { difficulty count } } } }',
    'variables': {'username': 'kavyagoswami'}
}
req = urllib.request.Request(url, data=json.dumps(data).encode('utf-8'), headers={'Content-Type': 'application/json'})
try:
    response = urllib.request.urlopen(req)
    print(response.read().decode('utf-8'))
except Exception as e:
    print(e)
