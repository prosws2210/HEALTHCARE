from flask import Flask, request
from tensorflow.keras.models import load_model
from tensorflow.keras.applications.vgg16 import preprocess_input
import numpy as np
from PIL import Image
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load both models
model_path1 = r'C:\Users\This Pc\Documents\GitHub\HEALTHCARE\PYTHON MODELS\Brain_Tumor_VGG_model.h5'
model_path2 = r'C:\Users\This Pc\Documents\GitHub\HEALTHCARE\PYTHON MODELS\Brain_Tumor_VGG_model_new.h5'

custom_objects = {"preprocess_input": preprocess_input}
model1 = load_model(model_path1, custom_objects=custom_objects)
model2 = load_model(model_path2, custom_objects=custom_objects)

@app.route('/predict', methods=['POST'])
def predict():
    file = request.files['image']
    print("Received file: ", file)

    image = Image.open(file.stream).resize((224, 224))
    image = np.array(image)

    # Ensure the image has 3 channels (RGB)
    if image.shape[-1] != 3:
        image = np.stack((image,) * 3, axis=-1)
    image = preprocess_input(image)
    image = np.expand_dims(image, axis=0)

    # Make predictions with both models
    prediction1 = model1.predict(image)
    prediction2 = model2.predict(image)

    prediction_str1 = 'Tumor is Present' if prediction1 > 0.2 else 'Tumor is not Present'
    prediction_str2 = 'Tumor is Present' if prediction2 > 0.2 else 'Tumor is not Present'

    prediction_scaled1 = prediction1 * 100
    prediction_scaled2 = prediction2 * 100

    print("Prediction result Model 1: ", prediction1)
    print("Scaled prediction result Model 1: ", prediction_scaled1)  
    print("Prediction string Model 1: ", prediction_str1)  

    print("Prediction result Model 2: ", prediction2)
    print("Scaled prediction result Model 2: ", prediction_scaled2)  
    print("Prediction string Model 2: ", prediction_str2)  

    return {
        'prediction_model1': prediction_scaled1.tolist()[0][0],
        'result_model1': prediction_str1,
        'prediction_model2': prediction_scaled2.tolist()[0][0],
        'result_model2': prediction_str2
    }

if __name__ == '__main__':
    app.run(debug=True)