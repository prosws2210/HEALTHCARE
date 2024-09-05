import streamlit as st
import pandas as pd
import sqlite3
import matplotlib.pyplot as plt
import seaborn as sns
import logging
from groq import Groq

# Initialize the Groq client with the API key
groq_client = Groq(api_key="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")

# Set up logging
logging.basicConfig(level=logging.INFO)

# Function to get response from Groq API
def get_groq_response(user_input):
    try:
        logging.info(f"Sending request to Groq API with input: {user_input}")
        response = groq_client.chat.completions.create(
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": f"Convert this question to a SQL query: {user_input}"},
            ],
            model="llama-3.1-70b-versatile",
            max_tokens=1024,
        )
        logging.info(f"Received response from Groq API: {response}")

        # Get the full content of the response
        full_response = response.choices[0].message.content
        
        # Try to extract the SQL query (between ```sql and ```)
        sql_start = full_response.find("```sql")
        sql_end = full_response.find("```", sql_start + 5)
        
        if sql_start != -1 and sql_end != -1:
            sql_query = full_response[sql_start + 5:sql_end].strip()
            
            # Clean up the query by removing any stray characters or newlines
            sql_query = sql_query.strip().replace("\n", " ")
            
            # Remove any leading invalid characters (like 'l')
            sql_query = sql_query.lstrip('l ').strip()
            
            return sql_query
        else:
            return "The response does not contain a valid SQL query."
    
    except Exception as e:
        logging.error(f"Error during Groq API call: {str(e)}")
        return f"An error occurred while processing your request: {str(e)}"



# Connect to SQLite database (replace with your own database connection)
def connect_to_db():
    conn = sqlite3.connect('patient_data.db')  # Change this to your DB
    return conn

# Streamlit app
st.title('Patient Data Analysis and Question Answering')

# Upload Excel file
uploaded_file = st.file_uploader("Choose an Excel file", type="xlsx")

if uploaded_file:
    # Read the Excel file
    df = pd.read_excel(uploaded_file)

    st.write("Data Preview:")
    st.write(df.head())

    # Display options for types of graphs
    st.sidebar.title("Graph Options")
    chart_type = st.sidebar.selectbox("Choose chart type", ["Line", "Bar", "Histogram", "Scatter", "Pie"])

    if chart_type == "Line":
        st.write("Line chart is not applicable for this dataset.")
    elif chart_type == "Bar":
        st.write("Bar chart of diseases:")
        disease_counts = df['Disease'].value_counts()
        st.bar_chart(disease_counts)
    elif chart_type == "Histogram":
        st.write("Histogram of Ages:")
        st.write(df['Age'].hist())
        st.pyplot()
    elif chart_type == "Scatter":
        st.write("Scatter plot of Age vs. Disease:")
        plt.figure(figsize=(10, 6))
        sns.scatterplot(data=df, x='Age', y='Disease', hue='Gender')
        plt.xlabel('Age')
        plt.ylabel('Disease')
        plt.title('Scatter plot of Age vs Disease')
        st.pyplot()
    elif chart_type == "Pie":
        st.write("Pie chart of diseases:")
        disease_counts = df['Disease'].value_counts()
        plt.figure(figsize=(8, 8))
        plt.pie(disease_counts, labels=disease_counts.index, autopct='%1.1f%%', startangle=140)
        plt.title('Disease Distribution')
        st.pyplot()

    # Connect to the database
    conn = connect_to_db()
    cursor = conn.cursor()

    # Text input for asking questions
    question = st.text_input("Ask a question about the data:")

    if question:
        # Get SQL query or response from Groq LLM
        groq_response = get_groq_response(f"Convert this question to a SQL query: {question}")
        
        # Display the generated SQL query
        st.write("Generated SQL query:")
        st.code(groq_response)

        # Check if the generated SQL query seems valid
        if "SELECT" in groq_response.upper():
            # Execute SQL query if valid
            try:
                cursor.execute(groq_response)
                query_result = cursor.fetchall()

                # Display the result in the app
                if query_result:
                    result_df = pd.DataFrame(query_result, columns=[i[0] for i in cursor.description])
                    st.write(result_df)
                else:
                    st.write("No results found.")
            
            except Exception as e:
                st.write(f"Error executing SQL query: {e}")
        else:
            st.write("The generated response doesn't seem to be a valid SQL query.")
    
    # Close the database connection
    conn.close()
