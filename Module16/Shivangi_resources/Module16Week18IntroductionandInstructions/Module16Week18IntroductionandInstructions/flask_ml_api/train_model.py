import pandas as pd
from sklearn.linear_model import LinearRegression
import joblib

data = {
    "hours":[1,2,3,4,5,6],
    "marks":[10,20,30,40,52,60]
}

df = pd.DataFrame(data)

X = df[["hours"]]
y = df["marks"]

model = LinearRegression()
model.fit(X,y)

joblib.dump(model,"marks_model.pkl")

print("Model trained and saved")