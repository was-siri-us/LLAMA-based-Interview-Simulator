# AI-Powered Interactive Interview Simulator

An innovative platform designed to prepare users for job interviews using LLAMA3. This simulator provides users with a personalized interview experience, allowing them to practice and refine their skills in a realistic environment.



## HackPrix 2024

This project was demonstrated as part of the **HackPrix Hackathon**, a 36-hour hackathon hosted at Lords Institute of Engineering & Technology, Hyderabad, on **8th and 9th June 2024**. The HackPrix Hackathon is organized by **CodeWave Hub**, promoting innovation and technical excellence.










## Features

- **User Authentication**: Log in securely to track your progress and reviews.
- **Job Role Templates**: Choose from a library of predefined job roles or enter your own job description for custom interviews.
- **AI-Generated Questions**: Interview questions are dynamically generated based on the job role or provided JD, ensuring relevance.
- **Voice Response**: Respond to questions using a microphone for a hands-free experience.
- **Automated Grading**: Responses are analyzed and graded using advanced natural language processing models.
- **Detailed Feedback**: Get comprehensive reviews and final assessments to identify strengths and areas for improvement.

## Technologies Used

- **Frontend**: Built with [Vite](https://vitejs.dev/) for a fast and efficient user interface.
- **Backend**: Node.js for managing API calls, user sessions, and server logic.
- **AI Model**: Python-powered [LLAMA-3](https://github.com/facebookresearch/llama) for generating interview questions and analyzing responses.
- **Speech Recognition**: Integrated for capturing and processing voice-based answers.

## Installation

### Prerequisites
- Node.js installed on your system.
- Python 3.x installed.
- [LLAMA-3 Model](https://github.com/facebookresearch/llama) setup.

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/interactive-interview-simulator.git
    ```

2. **Install Dependencies**
   - For the frontend:
     ```bash
     bun i
     ```
   - For the backend:
     ```bash
     cd server
     bun i
     ```
   - For the AI model:
     ```bash
     cd ai-model
     pip install -r requirements.txt
     ```

3. **Run the Application**
   - Start the frontend:
     ```bash
     bun run dev
     ```
   - Start the backend:
     ```bash
     node server.js
     ```
   - Start the AI model service:
     ```bash
     python model.py
     ```

4. Open your browser and navigate to `http://localhost:5173`.

---

### Usage

1. Log in to the platform using your credentials.
2. Select a job role from the available templates or upload your custom job description.
3. Begin the interview
