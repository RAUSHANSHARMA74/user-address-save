# user-address-save

## Clone the Repository

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/RAUSHANSHARMA74/user-address-save.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repo-name
   ```

## Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   - Create a `.env` file in the `backend` directory and add the following environment variables:

     ```env
     MONGODB=your_mongodb_connection_string
     PORT=5000
     ```

   - Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

4. Running the Backend:

   - Start the backend server:

     ```bash
     npm start
     ```

   - The backend server will run on `http://localhost:5000` or the port specified in your `.env` file.

## Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd ../frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   - Create a `.env` file in the `frontend` directory and add the following environment variable:

     ```env
     VITE_API_URL = http://localhost:5000
     ```

   - Replace `http://localhost:5000` with the URL of your backend server if different.

4. Running the Frontend:

   - Start the frontend application:

     ```bash
     npm run dev
     ```

   - The frontend application will run on `http://localhost:5173` by default.

## Additional Notes

- Ensure that MongoDB is running and accessible from the backend server.
- Make sure to set up the environment variables correctly to avoid connection issues.
- The frontend application expects the backend to be running on the URL specified in the `.env` file.

If you encounter any issues, please check the error messages for guidance or consult the documentation for the respective technologies used.
