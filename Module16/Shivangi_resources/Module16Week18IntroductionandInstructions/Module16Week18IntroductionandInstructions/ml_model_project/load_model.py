import joblib

# Step 1: Load saved model
model = joblib.load("marks_model.pkl")

print("Model loaded successfully")

# Step 2: Make prediction
hours = [[5]]

prediction = model.predict(hours)

print("Predicted Marks:", prediction[0])