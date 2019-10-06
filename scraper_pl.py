from urllib.request import urlopen
from bs4 import BeautifulSoup

data_page = 'https://www.premierleague.com/tables'
page = urlopen(data_page)
soup = BeautifulSoup(page, 'lxml')
data_rows = soup.select_one('tr[data-filtered-table-row-name]')
print("")
print("")
print("")
print("")
print("")
print("")
print(data_rows)



# teams = table_box.select('.hide-mobile .AnchorLink');
# print(teams)


# for link in teams:
#     print(link.getText())
# print("")
# print("")
# print("")
# print("")
# print("")
# print("")
# data_rows = table_box.select('tr[data-idx]')
# print(data_rows)

