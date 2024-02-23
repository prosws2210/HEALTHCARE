from flask import Flask, request
from keras.models import load_model
import numpy as np
from PIL import Image
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS
model = load_model(r'C:/Users/HP/Documents/GitHub/Project-Sem4/BACKEND/Flask Server/Brain_Tumor_VGG_model.h5')

@app.route('/predict', methods=['POST'])
def predict():
    file = request.files['image']
    print("Received file: ", file)  # Print the received file

    image = Image.open(file.stream).resize((224, 224))
    image = np.expand_dims(image, axis=0)
    prediction = model.predict(image)

    prediction_str = 'Tumor is Present' if prediction > 0.5 else 'Tumor is not Present'
    prediction_scaled = prediction * 100

    print("Prediction result: ", prediction)
    print("Scaled prediction result: ", prediction_scaled)  
    print("Prediction string: ", prediction_str)  

    return {'prediction': 'Prediction : ' + str(round(prediction_scaled.tolist()[0][0], 3)) + ' %' + '\nResult : ' + prediction_str}

if __name__ == '__main__':
    app.run(debug = True)
