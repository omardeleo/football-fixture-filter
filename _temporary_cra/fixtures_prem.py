import json

from urllib.request import urlopen
from bs4 import BeautifulSoup

import fixture_vars_global

data_page = 'https://www.worldfootball.net/all_matches/eng-premier-league-2019-2020/'
page = urlopen(data_page)
soup = BeautifulSoup(page, 'html.parser')


def generateFixtureData(table):
    def getAnchorTag(elem):
        return elem.select("a")

    def evaluateRow(row):
        if isHeaderRow(row):
            fixture_vars_global.round = getAnchorTag(row)[0].getText()
        else:
            extractRowData(row)

    def isHeaderRow(row):
        return len(getAnchorTag(row)) == 1

    def extractRowData(row):
        matchObj = {}
        cells = row.select('td')
        if cells[0].getText() != "":
            if len(fixture_vars_global.matches) != 0:
                fixture_vars_global.resultObj[fixture_vars_global.matchDate] = fixture_vars_global.matches
                fixture_vars_global.matches = []
            fixture_vars_global.matchDate = cells[0].getText()
        matchObj['date'] = fixture_vars_global.matchDate
        matchObj['time'] = cells[1].getText()
        matchObj['round'] = fixture_vars_global.round
        matchObj['homeTeam'] = getAnchorTag(cells[2])[0].getText()
        matchObj['awayTeam'] = getAnchorTag(cells[4])[0].getText()
        fixture_vars_global.matches.append(matchObj)
        return matchObj

    for row in table:
        evaluateRow(row)
    fixture_vars_global.resultObj[fixture_vars_global.matchDate] = fixture_vars_global.matches

    return fixture_vars_global.resultObj

dataTable = soup.select('.data > .standard_tabelle')
allTableRows = dataTable[0].select("tr")
fixtures = generateFixtureData(allTableRows)
print(fixtures)
with open('fixtures_prem.txt', 'w') as outfile:
    json.dump(fixtures, outfile, indent=4)
