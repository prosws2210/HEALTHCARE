from flask import Flask, request, jsonify
from flask_cors import CORS
from groq import Groq
import logging

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Set your Groq API key
groq_client = Groq(api_key="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")

logging.basicConfig(level=logging.INFO)


def get_groq_response(user_input):
    try:
        logging.info(f"Sending request to Groq API with input: {user_input}")
        response = groq_client.chat.completions.create(
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": user_input},
            ],
            model="llama-3.1-70b-versatile",
            max_tokens=1024,
        )
        logging.info(f"Received response from Groq API: {response}")
        return response.choices[0].message.content
    except Exception as e:
        logging.error(f"Error during Groq API call: {str(e)}")
        return "An error occurred while processing your request."


@app.route("/api/get_response", methods=["POST"])
def get_response():
    data = request.json
    user_input = data.get("user_input", "")
    if user_input:
        response = get_groq_response(user_input)
        return jsonify({"response": response})
    return jsonify({"error": "No input provided"}), 400


if __name__ == "__main__":
    app.run(debug=True)

