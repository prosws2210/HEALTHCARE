import streamlit as st
import numpy as np
from PIL import Image
from tensorflow.keras.models import load_model
from tensorflow.keras.applications.vgg16 import preprocess_input

# Load both models
model_path1 = r'C:\Users\HP\Documents\GitHub\HEALTHCARE\PYTHON MODELS\Brain_Tumor_VGG_model.h5'
model_path2 = r'C:\Users\HP\Documents\GitHub\HEALTHCARE\PYTHON MODELS\Brain_Tumor_VGG_model_new.h5'

custom_objects = {"preprocess_input": preprocess_input}
model1 = load_model(model_path1, custom_objects=custom_objects)
model2 = load_model(model_path2, custom_objects=custom_objects)

def predict(image):
    image = image.resize((224, 224))
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

    return {
        'prediction_model1': prediction_scaled1.tolist()[0][0],
        'result_model1': prediction_str1,
        'prediction_model2': prediction_scaled2.tolist()[0][0],
        'result_model2': prediction_str2
    }

def main():
    st.title("Brain Tumor Prediction")
    uploaded_file = st.file_uploader("Choose an image...", type=["jpg", "png"])

    if uploaded_file is not None:
        image = Image.open(uploaded_file)
        result = predict(image)
        st.write(f"Model 1 Prediction: {result['result_model1']} ({result['prediction_model1']}%)")
        st.write(f"Model 2 Prediction: {result['result_model2']} ({result['prediction_model2']}%)")

if __name__ == '__main__':
    main()
