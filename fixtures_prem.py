import json

from urllib.request import urlopen
from bs4 import BeautifulSoup

data_page = 'https://www.worldfootball.net/all_matches/eng-premier-league-2019-2020/'
page = urlopen(data_page)
soup = BeautifulSoup(page, 'html.parser')

sObject = slice(10)
theThing = soup.select('.data > .standard_tabelle')
first10 = theThing[0].select("tr")[sObject]
print(first10)
