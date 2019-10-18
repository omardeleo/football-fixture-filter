import json

from urllib.request import urlopen
from bs4 import BeautifulSoup

data_page = 'https://www.premierleague.com/tables'
page = urlopen(data_page)
soup = BeautifulSoup(page, 'html.parser')
sObject = slice(20)
all_teams = soup.select('td[scope]')[sObject]

team = soup.select_one('td[scope]')

fields = ["gamesPlayed", "won",
          "drawn", "lost", "goalsFor", "goalsAgainst",
          "goalDifference", "points"]

def createTeamData(elem):
    counter = 0
    teamInfo = {}
    teamName = elem.getText()
    slice1 = slice(0, -4)
    slice2 = slice(-4, -1)
    teamInfo["name"] = teamName[slice1].strip()
    teamInfo["symbol"] = teamName[slice2].strip()
    classes = elem['class']
    while 'points' not in classes:
        elem = elem.find_next('td')
        classes = elem['class'] if elem.has_attr('class') else []
        teamInfo[fields[counter]] = elem.getText().strip()
        counter += 1
    return teamInfo

def generateTableData(teamsHtml):
    table_data = {}
    for idx, team in enumerate(teamsHtml, start=0):
        table_data[idx+1] = createTeamData(team)
    return table_data

table = generateTableData(all_teams)

# with open('table.txt', 'w') as outfile:
#     json.dump(table_data, outfile, indent=4)

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
