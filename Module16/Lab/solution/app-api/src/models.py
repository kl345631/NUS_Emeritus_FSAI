from flask import request
import joblib
import os
import connexion
import tensorflow as tf
from PIL import Image
import numpy as np
from tensorflow.keras.utils import load_img, img_to_array
from tensorflow.keras.models import load_model

# Define the size required by your specific model
# IMG_SIZE = (32, 32)

# 1. Add the helper function here
def preprocess_image(image_path, img_size=(64, 64)):     
    # 1. Start with the raw image
    img = load_img(image_path, target_size=img_size, color_mode='rgb')
    
    # 2. CREATE 'img_array' HERE (from the 'img' above)
    img_array = img_to_array(img) 
    
    # 3. Now you can use it to divide by 255
    img_array = img_array / 255.0 
    
    # 4. Use it again to add dimensions
    img_array = np.expand_dims(img_array, axis=0) 
    
    # 5. Send the finished array back
    return img_array

def shapesClassifier():
    try:
        # 1. # a. Get the uploaded file
        image_file = request.files['image']
        
        # Save the image to a temporary location
        image_path = f'../temp/{image_file.filename}'
        image_file.save(image_path)
        
        # Preprocess the image
        image_array = preprocess_image(image_path)

        # 3. Load and prepare the image 
        img_ready = preprocess_image(image_path)

        # 4. Load the model
        # model_path = os.path.join('..', 'models', 'shape_classifier_cnn.keras')
        model_path = load_model('../models/shape_classifier_cnn.keras')
        model = tf.keras.models.load_model(model_path)

        # 5. Predict
        prediction = model.predict(img_ready)
        classes = ['circle', 'square', 'star', 'triangle']
        result = classes[np.argmax(prediction)]

        return {"prediction": result}, 200

    except Exception as e:
        return {"error": str(e)}, 500

def irisClassifier():
    try:
        # a. Retrieve the data
        data = request.json
        # If the data is still not being read, we use this as a backup:
        if data is None:
            data = request.get_json(force=True)
        
        features = [[
            float(data['sepal_length']),
            float(data['sepal_width']),
            float(data['petal_length']),
            float(data['petal_width'])
        ]]
        
        # b. Load the model 
        # We use '..' to go up from 'src' to find the 'models' folder
        model_path = os.path.join('..', 'models', 'iris_dtree_classifier.joblib')
        model = joblib.load(model_path)
        
        prediction = model.predict(features)

        # c. Return result (the .tolist() makes it compatible with JSON)
        return {"prediction": prediction.tolist()}, 200

    except Exception as e:
        # d. Return error message
        return {"error": str(e)}, 500
    
