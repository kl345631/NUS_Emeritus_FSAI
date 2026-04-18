import connexion #allows to create APIs directly from an OpenAPI(Swagger) specification file
from flask_cors import CORS #Cross-Origin Resource sharing

app = connexion.App(__name__, specification_dir="./")

flask_app = app.app
CORS(flask_app)

app.add_api("openapi.yaml")

if __name__ == "__main__":
    app.run(port=5000)


