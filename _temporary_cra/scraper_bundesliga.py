import json

from urllib.request import urlopen
from bs4 import BeautifulSoup

data_page = 'https://www.skysports.com/bundesliga-table'
page = urlopen(data_page)
soup = BeautifulSoup(page, 'html.parser')
sObject = slice(1,21)
slice1 = slice(1)
all_teams = soup.find_all("tr", class_="standing-table__row")[sObject]

fields = ["gamesPlayed", "won",
          "drawn", "lost", "goalsFor", "goalsAgainst",
          "goalDifference", "points"]

def createTeamData(elem):
    teamInfo = {}
    nextDiv = elem.select('.standing-table__cell--name-link')[0]
    teamInfo["name"] = nextDiv.getText().strip()

    counter = 0
    while counter < 8:
        nextDiv = nextDiv.find_next('td')
        teamInfo[fields[counter]] = nextDiv.getText().strip()
        counter += 1    
    return teamInfo

def generateTableData(teamsHtml):
    table_data = {}
    for idx, team in enumerate(teamsHtml, start=0):
        table_data[idx+1] = createTeamData(team)
    return table_data

table = generateTableData(all_teams)
print(json.dumps(table, indent=4))

def lambda_handler(event, context):
    # TODO implement
    return {
        'statusCode': 200,
        'headers' : {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        'body': json.dumps(table)
    }
