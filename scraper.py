from urllib.request import urlopen
from bs4 import BeautifulSoup

data_page = 'https://www.espn.com/soccer/standings/_/league/eng.1'
page = urlopen(data_page)
soup = BeautifulSoup(page, 'html.parser')
table_box = soup.find(name='section', attrs={'class':'ResponsiveTable ResponsiveTable--fixed-left'})
print(table_box.prettify())