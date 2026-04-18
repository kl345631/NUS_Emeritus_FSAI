import pandas as pd
from sklearn.linear_model import LinearRegression
import joblib

# Step 1: Create dataset
data = {
    "hours": [1,2,3,4,5,6],
    "marks": [10,20,30,40,52,60]
}

df = pd.DataFrame(data)

# Step 2: Split input and output
X = df[["hours"]]
y = df["marks"]

# Step 3: Train model
model = LinearRegression() # marks = m x hours + b 
model.fit(X,y)

print("Model trained successfully")

# Step 4: Save model
joblib.dump(model,"marks_model.pkl")

print("Model saved as marks_model.pkl")