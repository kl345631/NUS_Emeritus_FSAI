import joblib
from flask import request #is used to receive data sent from the client(frontend)

model = joblib.load("marks_model.pkl")

def predict_marks():

    data = request.json
    hours = data["hours"]

    prediction = model.predict([[hours]])

    return {"predicted_marks": float(prediction[0])}


def options_handler():
    return {"message": "CORS preflight OK"}