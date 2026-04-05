import connexion # framework built on top of flask
app = connexion.App(__name__,specification_dir=".")
app.add_api("swagger.yaml")

if __name__ == "__main__":
    app.run(port=4000,debug=True)