from flask import Flask, request, jsonify
from flask_cors import CORS  
from NLP_model import MedicalBot

app = Flask(__name__)
CORS(app) 
bot = MedicalBot()


@app.route('/api/get_response', methods=['POST'])
def get_response():
    user_input = request.json.get('user_input')
    response = bot.get_response(user_input)
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)
