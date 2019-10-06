from urllib.request import urlopen
from bs4 import BeautifulSoup

data_page = 'https://www.premierleague.com/tables'
page = urlopen(data_page)
soup = BeautifulSoup(page, 'lxml')
data_rows = soup.select_one('tr[data-filtered-table-row-name]')
# soup.select_one('td[scope]')
# the above selects the td element with the team abbr name
# the following td's have the table info for that team up until
# <td class="points">...</td>
print("")
print("")
print("")
print("")
print("")
print("")
print(data_rows)
