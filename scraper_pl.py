import json

from urllib.request import urlopen
from bs4 import BeautifulSoup

data_page = 'https://www.premierleague.com/tables'
page = urlopen(data_page)
soup = BeautifulSoup(page, 'lxml')
# select element with team info
team = soup.select_one('td[scope]')
teamInfo = {}
teamName = team.getText()
slice1 = slice(0, -4)
slice2 = slice(-4, -1)
teamInfo["name"] = teamName[slice1].strip()
teamInfo["symbol"] = teamName[slice2].strip()

fields = ["gamesPlayed", "won", 
    "drawn", "lost", "goalsFor", "goalsAgainst", 
    "goalDifference", "points"]

counter = 0

classes = team['class']
while 'points' not in classes:
    team = team.find_next('td')
    classes = team['class'] if team.has_attr('class') else []
    teamInfo[fields[counter]] = team.getText().strip()
    counter += 1

# with open('data.txt', 'w') as outfile:
#     json.dump(teamInfo, outfile)

print("***")
print("***")
print("***")
print(teamInfo)