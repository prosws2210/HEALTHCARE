import pandas as pd
import numpy as np
from faker import Faker
import random

# Initialize Faker instance
fake = Faker()

# Define list of possible diseases and regions
diseases = [
    'Influenza', 'Dengue', 'COVID-19', 'Malaria', 'Typhoid', 'Cholera', 'Tuberculosis', 
    'Pneumonia', 'Diabetes', 'Hypertension', 'Asthma', 'Cancer', 'Heart Disease'
]
regions = ['North', 'South', 'East', 'West', 'Central']

# Create a function to generate synthetic hospital data
def generate_synthetic_hospital_data(num_records):
    data = {
        'Patient ID': [],
        'Name': [],
        'Age': [],
        'Gender': [],
        'Disease': [],
        'Admission Date': [],
        'Region': []
    }
    
    for _ in range(num_records):
        patient_id = fake.uuid4()  # Unique patient ID
        name = fake.name()  # Random name
        age = random.randint(1, 90)  # Random age between 1 and 90
        gender = random.choice(['Male', 'Female', 'Other'])  # Random gender
        disease = random.choice(diseases)  # Random disease from the list
        admission_date = fake.date_between(start_date='-2y', end_date='today')  # Admission date within last 2 years
        region = random.choice(regions)  # Random region
        
        # Add the data to the respective lists
        data['Patient ID'].append(patient_id)
        data['Name'].append(name)
        data['Age'].append(age)
        data['Gender'].append(gender)
        data['Disease'].append(disease)
        data['Admission Date'].append(admission_date)
        data['Region'].append(region)
    
    # Convert to pandas DataFrame
    df = pd.DataFrame(data)
    return df

# Generate synthetic data for 1000 patients
num_records = 1000
hospital_data = generate_synthetic_hospital_data(num_records)

# Save the data to an Excel file
excel_file_name = 'synthetic_hospital_data.xlsx'
hospital_data.to_excel(excel_file_name, index=False, engine='openpyxl')

# Display the first few rows of the synthetic data
print(f"Data successfully written to {excel_file_name}")
print(hospital_data.head())
