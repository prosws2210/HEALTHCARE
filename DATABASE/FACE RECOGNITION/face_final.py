import face_recognition
import cv2
import numpy as np
import csv
from datetime import datetime

video_capture = cv2.VideoCapture(0)

# Load known faces
sks_image = face_recognition.load_image_file(r"G:\Machine Learning\Projects from Internet\3. Face Recognition\Images\22BAI1000.jpg")
sks_encoding = face_recognition.face_encodings(sks_image)[0]

ss_image = face_recognition.load_image_file(r"G:\Machine Learning\Projects from Internet\3. Face Recognition\Images\22BAI1001.jpg")
ss_encoding = face_recognition.face_encodings(ss_image)[0]

sws_image = face_recognition.load_image_file(r"G:\Machine Learning\Projects from Internet\3. Face Recognition\Images\22BAI1012.jpg")
sws_encoding = face_recognition.face_encodings(sws_image)[0]

srs_image = face_recognition.load_image_file(r"G:\Machine Learning\Projects from Internet\3. Face Recognition\Images\22BAI1013.jpg")
srs_encoding = face_recognition.face_encodings(srs_image)[0]

alexa_image = face_recognition.load_image_file(r"C:\Users\HP\Documents\GitHub\HEALTHCARE\DATABASE\FACE RECOGNITION\Images\22BAI1312.jpg")
alexa_encoding = face_recognition.face_encodings(alexa_image)[0]

known_face_encodings = [sks_encoding, ss_encoding, sws_encoding, srs_encoding, alexa_encoding]
known_face_names = ["Swaroop", "Sajita", "Shakti", "Sradha", "Alexa"]

# List of expected students
students = known_face_names.copy()

face_locations = []
face_encodings = []

# Get the current date and time
now = datetime.now()
current_date = now.strftime("%Y-%m-%d")

f = open(f"{current_date}.csv", "w+", newline="")
lnwriter = csv.writer(f)

# Counter for the number of frames
frame_counter = 0

# Calculate the total number of students
total_students = len(known_face_names)

# Define the font outside the loop
font = cv2.FONT_HERSHEY_SIMPLEX
fontScale = 0.7
fontColor = (255, 0, 0)
thickness = 2
lineType = 2

while True:
    _, frame = video_capture.read()
    frame_counter += 1

    small_frame = cv2.resize(frame, (0, 0), fx=0.25, fy=0.25)
    rgb_small_frame = cv2.cvtColor(small_frame, cv2.COLOR_BGR2RGB)

    # Recognise faces
    face_locations = face_recognition.face_locations(rgb_small_frame)
    face_encodings = face_recognition.face_encodings(rgb_small_frame, face_locations)

    present_names = []

    for face_encoding in face_encodings:
        matches = face_recognition.compare_faces(known_face_encodings, face_encoding)
        face_distance = face_recognition.face_distance(known_face_encodings, face_encoding)
        best_match_indices = np.where(matches)[0]

        for best_match_index in best_match_indices:
            name = known_face_names[best_match_index]
            present_names.append(name)

            # Add the text if a person is present
            bottomLeftCornerOfText = (10, frame.shape[0] - 10)
            cv2.putText(frame, f"Hello {name}! Present", bottomLeftCornerOfText, font, fontScale, fontColor, thickness, lineType)

            # Add recognition confidence
            confidence = 1 - face_distance[best_match_index]
            cv2.putText(frame, f"Confidence: {confidence:.2%}", (10, frame.shape[0] - 60), font, fontScale, fontColor, thickness, lineType)

            if name in students:
                students.remove(name)
                current_time = now.strftime("%H:%M:%S")
                lnwriter.writerow([name, current_time])

    # Display the number of students present
    cv2.putText(frame, f"Students Present: {len(present_names)}", (10, frame.shape[0] - 30), font, fontScale, fontColor, thickness, lineType)

    # Display total and remaining students
    remaining_students = total_students - len(present_names)
    cv2.putText(frame, f"Total Students: {total_students} | Remaining: {remaining_students}", (10, frame.shape[0] - 90), font, fontScale, fontColor, thickness, lineType)

    # Calculate and display time remaining for the class (assuming a 30 fps frame rate)
    time_remaining = max(0, (900 - frame_counter) // 30)  # 900 seconds is 15 minutes
    cv2.putText(frame, f"Time Remaining: {time_remaining // 60}m {time_remaining % 60}s", (10, frame.shape[0] - 120), font, fontScale, fontColor, thickness, lineType)

    cv2.imshow("Camera", frame)
    if cv2.waitKey(1) & 0xFF == ord("q"):
        break

video_capture.release()
cv2.destroyAllWindows()
f.close()