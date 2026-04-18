import connexion

def predict(body):
    f1 = body.get("feature1", 0)
    f2 = body.get("feature2", 0)
    result = f1 + f2
    
    return {"prediction": result, "status": "success"}, 200

# Initialize Connexion
app = connexion.App(__name__, specification_dir='./')
app.add_api('swagger.yaml')

if __name__ == "__main__":
    print("API is running on http://127.0.0.1")
    app.run(port=5000)