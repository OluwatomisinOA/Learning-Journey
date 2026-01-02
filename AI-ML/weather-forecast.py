# import the necesary libraries
import numpy as np
import pandas as  pd

# load the csv file as dataframe
df = pd.read_csv(r'C:\Users\HomePC\Desktop\Learning-Journey\AI-ML\weatherAUS.csv')

print("Size of weather data frame is,", df.shape)

# display data
print(df[0:5])

# data pre-processing
# checking for null values
print(df.count().sort_values())

df = df.drop(columns=['Sunshine','Evaporation','Cloud3pm','Cloud9am','Location','RISK_MM','Date'], axis=1)
print(df.shape)

# Let us get rid of all null values in df
df = df.dropna(how='any')
print(df.shape)

