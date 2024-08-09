from flask import Flask, request, jsonify
from groq import Groq
import logging

app = Flask(__name__)

# Set your Groq API key
groq_client = Groq(
    api_key="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"
)

logging.basicConfig(level=logging.INFO)

def get_groq_response(user_input):
    try:
        response = groq_client.chat.completions.create(
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": user_input},
            ],
            model="llama-3.1-70b-versatile",
            max_tokens=1024
        )
        return response.choices[0].message['content']
    except Exception as e:
        logging.error(f"Error during Groq API call: {str(e)}")
        return "An error occurred while processing your request."

@app.route('/api/get_response', methods=['POST'])
def get_response():
    data = request.json
    user_input = data.get('user_input', '')
    if user_input:
        response = get_groq_response(user_input)
        return jsonify({"response": response})
    return jsonify({"error": "No input provided"}), 400

if __name__ == '__main__':
    app.run(debug=True)
