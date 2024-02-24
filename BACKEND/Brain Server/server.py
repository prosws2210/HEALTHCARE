from flask import Flask, request
from tensorflow.keras.models import load_model
from tensorflow.keras.applications.vgg16 import preprocess_input
import numpy as np
from PIL import Image
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
model_path = r'C:\Users\HP\Documents\GitHub\HEALTHCARE\PYTHON MODELS\Brain_Tumor_VGG_model.h5'

# Load model with custom objects
custom_objects = {"preprocess_input": preprocess_input}
model = load_model(model_path, custom_objects=custom_objects)

@app.route('/predict', methods=['POST'])
def predict():
    file = request.files['image']
    print("Received file: ", file)

    image = Image.open(file.stream).resize((224, 224))
    image = np.array(image)
    image = preprocess_input(image)
    image = np.expand_dims(image, axis=0)

    prediction = model.predict(image)

    prediction_str = 'Tumor is Present' if prediction > 0.2 else 'Tumor is not Present'
    prediction_scaled = prediction * 100

    print("Prediction result: ", prediction)
    print("Scaled prediction result: ", prediction_scaled)  
    print("Prediction string: ", prediction_str)  

    return {
        'prediction': prediction_scaled.tolist()[0][0],
        'result': prediction_str
    }

if __name__ == '__main__':
    app.run(debug=True)
