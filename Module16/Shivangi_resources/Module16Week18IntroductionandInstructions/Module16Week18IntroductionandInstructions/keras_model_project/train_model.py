import numpy as np
from tensorflow import keras # tensorflow is deep learning library and kera is API inside tensorflow
                                            #used to build neural networks
from tensorflow.keras import layers

# Step 1: Dataset
hours = np.array([1,2,3,4,5,6])
result = np.array([0,0,0,1,1,1])

# Step 2: Build neural network
model = keras.Sequential([
    layers.Dense(8, activation="relu", input_shape=(1,)),
     #relu => input: -3, output: 0, input: 5, output: 5
    layers.Dense(1, activation="sigmoid") # value:0.2-> fail, 0.8-> Pass
])

# Step 3: Compile model
model.compile(
    optimizer="adam",
    loss="binary_crossentropy",
    metrics=["accuracy"] #correct prediction/total prediction
)

# Step 4: Train model
model.fit(hours, result, epochs=200)

print("Model trained")

# Step 5: Save model
model.save("pass_fail_model.h5")
'''
h5 format stores:
model architecture
weights
Training configuration
'''

print("Model saved")