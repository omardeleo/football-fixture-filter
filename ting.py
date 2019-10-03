import requests
url = "https://www.premierleague.com/tables"
page = requests.get(url)
import bs4
soup = bs4.BeautifulSoup(page.content, 'lxml')
table = soup.find(name='tbody', attrs={'class':'tableBodyContainer isPL'})
print(table)