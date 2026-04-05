import numpy as np
from tensorflow.keras.models import load_model
# Step 1: Load saved model
model = load_model("pass_fail_model.h5")
print("Model loaded")
# Step 2: Make prediction
hours = np.array([[5]])
prediction = model.predict(hours)
print("Prediction value:", prediction[0][0])
# Convert to Pass/Fail
if prediction[0][0] > 0.5:
    print("Result: PASS")
else:
    print("Result: FAIL")