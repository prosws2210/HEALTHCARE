from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mysqldb import MySQL

app = Flask(__name__)
CORS(app)

# MySQL Configuration
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'tiger'
app.config['MYSQL_DB'] = 'staff_healthcare'

mysql = MySQL(app)

# Endpoint for registering staff
@app.route('/register', methods=['POST'])
def register_staff():
    data = request.json

    full_name = data.get('full_name')
    gender = data.get('gender')
    date_of_birth = data.get('date_of_birth')
    blood_group = data.get('blood_group')
    phone_number = data.get('phone_number')
    alternate_phone_number = data.get('alternate_phone_number')
    staff_id = data.get('staff_id')
    department_name = data.get('department_name')
    aadhar_number = data.get('aadhar_number')
    education = data.get('education')
    experience = data.get('experience')
    language = data.get('language')
    timing = data.get('timing')
    email = data.get('email')
    password = data.get('password')

    cur = mysql.connection.cursor()
    cur.execute(
        """INSERT INTO staff_records (full_name, gender, date_of_birth, blood_group, phone_number, 
        alternate_phone_number, staff_id, department_name, aadhar_number, education, experience, 
        language, timing, email, password, profile_image) 
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)""",
        (full_name, gender, date_of_birth, blood_group, phone_number, alternate_phone_number, 
         staff_id, department_name, aadhar_number, education, experience, language, timing, 
         email, password, request.files.get('profile_image').read())
    )

    mysql.connection.commit()
    cur.close()

    return jsonify({"message": "Staff registered successfully"}), 200

if __name__ == '__main__':
    app.run(debug=True)
