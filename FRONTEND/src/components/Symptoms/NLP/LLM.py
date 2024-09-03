import streamlit as st
from groq import Groq
import logging
import time

# Set your Groq API key
groq_client = Groq(
    api_key="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"
)

logging.basicConfig(level=logging.INFO)

# Initialize chat history in session state if not already present
if 'messages' not in st.session_state:
    st.session_state.messages = []

# Function to stream chat response
def stream_chat(messages):
    try:
        response = groq_client.chat.completions.create(
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                *[{"role": m["role"], "content": m["content"]} for m in messages]
            ],
            model="llama-3.1-70b-versatile",
            stream=True,
            max_tokens=1024
        )
        
        response_placeholder = st.empty()
        full_response = ""
        
        for chunk in response:
            if chunk.choices[0].delta.content is not None:
                full_response += chunk.choices[0].delta.content
                response_placeholder.markdown(full_response + "▌")
        
        response_placeholder.markdown(full_response)
        
        # Log the interaction details
        logging.info(f"Messages: {messages}, Response: {full_response}")
        return full_response
    except Exception as e:
        # Log and re-raise any errors that occur
        logging.error(f"Error during streaming: {str(e)}")
        raise e

def main():
    st.title("SWS Medical Assitant LLM Model")
    logging.info("App started")

    # Display chat history
    for message in st.session_state.messages:
        with st.chat_message(message["role"]):
            st.markdown(message["content"])

    # Prompt for user input
    if prompt := st.chat_input("Your question"):
        st.session_state.messages.append({"role": "user", "content": prompt})
        with st.chat_message("user"):
            st.markdown(prompt)
        
        # Generate a new response
        with st.chat_message("assistant"):
            start_time = time.time()
            logging.info("Generating response")

            with st.spinner("Thinking..."):
                try:
                    response_message = stream_chat(st.session_state.messages)
                    duration = time.time() - start_time
                    st.session_state.messages.append({"role": "assistant", "content": response_message})
                    st.write(f"Response time: {duration:.2f} seconds")
                    logging.info(f"Response generated. Duration: {duration:.2f} s")
                except Exception as e:
                    st.error("An error occurred while generating the response.")
                    logging.error(f"Error: {str(e)}")

if __name__ == "__main__":
    main()