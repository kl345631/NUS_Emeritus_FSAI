import mlflow.sklearn
import os
from sklearn.datasets import load_iris
from sklearn.tree import DecisionTreeClassifier

# Define your exact project path
project_path = r"C:\Users\Kim\NUS_Emeritus\FSAI_main\Module16\Assignment\mlflow\my_iris_model"

# 1. Load data and train a simple model
iris = load_iris()
clf = DecisionTreeClassifier()
clf.fit(iris.data, iris.target)

# 2. SAVE the model in MLflow format
mlflow.sklearn.save_model(sk_model=clf, path=project_path)

print("MLflow model folder saved at:{project_path}")
