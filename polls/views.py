import datetime
from django.shortcuts import render
from covid19_data import JHU
import pandas as pd
import json as simplejson
import requests


def home(request):
    df_new_case = pd.read_csv('https://covid.ourworldindata.org/data/ecdc/new_cases.csv')
    df_death_case = pd.read_csv('https://covid.ourworldindata.org/data/ecdc/new_deaths.csv')
    df_recovery_case = pd.read_csv(
        'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv')
    report_directory = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/'
    yesterday = datetime.date.today() - datetime.timedelta(days=2)
    file_date = yesterday.strftime('%m-%d-%Y')

    df_daily_report = pd.read_csv(report_directory + file_date + '.csv', dtype={"FIPS": str})
    URL = "https://api.bnry.host/covid19-data"
    r = requests.get(url=URL)
    result = r.json()
    result = result["States"]

    return render(request, "home.html", {"total": JHU.Total.cases,
                                         "conform": JHU.Total.confirmed,
                                         "recover": JHU.Total.recovered,
                                         "death": JHU.Total.deaths,
                                         "active": JHU.Total.cases - JHU.Total.recovered,
                                         "label1": simplejson.dumps(list(df_new_case["date"])),
                                         "data1": simplejson.dumps(list(df_new_case["World"])),
                                         "label2": simplejson.dumps(list(df_death_case["date"])),
                                         "data2": simplejson.dumps(list(df_death_case["World"])),
                                         "label3": simplejson.dumps(list(df_recovery_case["Country/Region"])),
                                         "data3": simplejson.dumps(list(df_recovery_case.iloc[:, -1])),
                                         "result": result
                                         })

