# Weather Forecasting Web App

## 🌦️ Overview
Hey there! Welcome to the Weather Forecasting Web App. This app is designed to give you real-time weather updates based on where you are or the city you enter. Whether you're planning your day or just curious about the weather, this app has you covered! It's built using React for the frontend and has an optional Node.js backend for added features.

## 🚀 Features
- **Real-Time Weather Data**: Get up-to-the-minute weather conditions, including temperature, humidity, wind speed, and more!
- **User-Friendly Input**: Simply type in a city name to find the weather.
- **Responsive Design**: The app looks great on any device, whether you're on your phone, tablet, or desktop.
- **Error Handling**: If something goes wrong (like an invalid city name), the app will let you know.
- **Loading Indicator**: While the weather data is being fetched, you'll see a loading spinner to keep you informed.

## 🛠️ Technologies Used
- **Frontend**: React, CSS (for that sweet responsive design)
- **Backend (Optional)**: Node.js, Express.js, MongoDB
- **API**: OpenWeatherMap API

## 💻 Getting Started

### Prerequisites
Before you start, make sure you have Node.js and npm installed on your machine. You'll also need a free API key from OpenWeatherMap. You can sign up for one [here](https://openweathermap.org/api).

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/himatejagolli2267/weather-forecasting-app.git
   cd weather-forecasting-app


## 📸 Screenshots from different devices
## 📸 Screenshot1
Here is the screenshot of the  Web App in desktop action:

![Weather App Screenshot on desktop] ![Screenshot on desktop](https://github.com/user-attachments/assets/2d15253e-fdb2-407b-a2db-dc2add3a0346)

## 📸 Screenshot2
Here is thescreen shot of the Web App in mobile action:

![Weather App Screenshot on mobile]![screenshot on mobile](https://github.com/user-attachments/assets/0a30c170-78f4-4c56-adc5-64f7a4b85fc7)







## 📝 Development Process

### Frontend Development Process
1. **Project Setup**:
   - Created a new React application using Create React App.
     ```bash
     npx create-react-app weather-forecasting-frontend
     ```

2. **Component Structure**:
   - Designed the main components:
     - **Weather**: Displays weather information.
     - **Loader**: Shows a loading spinner while data is being fetched.

3. **Styling**:
   - Implemented CSS for a responsive and user-friendly interface.
   - Used Flexbox and CSS Grid for layout design.

4. **API Integration**:
   - Integrated the OpenWeatherMap API to fetch real-time weather data based on user input.
   - Implemented error handling for invalid city names and API errors.

5. **State Management**:
   - Managed state using React hooks (e.g., `useState`, `useEffect`) for handling API responses and loading states.

6. **Responsive Design**:
   - Ensured the app is mobile-friendly and adapts to different screen sizes.

7. **Testing**:
   - Conducted manual testing to ensure all features functioned correctly across various devices.

### Backend Development Process (Optional)
1. **Project Setup**:
   - Initialized a Node.js application and set up Express.js for handling API requests.
     ```bash
     npm init -y
     npm install express mongoose cors
     ```

2. **Database Setup**:
   - Configured MongoDB for storing user search history (if applicable).
   - Created models for the database using Mongoose.

3. **API Endpoints**:
   - Developed API endpoints for:
     - Fetching user search history.
     - Storing new search entries.

4. **Middleware**:
   - Implemented middleware for CORS to allow cross-origin requests from the frontend.

5. **Testing**:
   - Tested API endpoints using tools like Postman to ensure they return the expected responses.

6. **Deployment**:
   - Deployed the backend to a cloud platform (e.g., Heroku, Vercel) to make it accessible for the frontend.

### Conclusion
Following this structured development process ensured that both the frontend and backend were well-organized, maintainable, and scalable. This approach allowed us to build a robust Weather Forecasting Web App that provides real-time weather updates to users.











## 🚀 Deployment

To deploy the Weather Forecasting Web App, we used **Vercel**, a popular platform for hosting frontend applications. Below are the steps to deploy your app on Vercel:

1. **Create a Vercel Account**:
   - Sign up for a free account on [Vercel](https://vercel.com).

2. **Link Your GitHub Repository**:
   - Once logged in, click on the **New Project** button.
   - Connect your GitHub account and select the **weather-forecasting-app** repository to import it into Vercel.

3. **Configure Project Settings**:
   - Vercel will automatically detect that you’re using a React application. Review the settings:
     - **Build Command**: `npm run build`
     - **Output Directory**: `build`

4. **Deploy the App**:
   - Click on the **Deploy** button. Vercel will build and deploy your application.
   - Wait for the deployment process to complete. This usually takes a few moments.

5. **Access Your Deployed App**:
   - Once deployment is complete, Vercel will provide you with a unique URL where your app is live.
   - You can access your application at this URL.

6. **Include the Deployment Link**:
   - Add the link to your deployed app in the README file:
   ```markdown
   ## 🌐 Live Demo
   Check out the live version of the Weather Forecasting Web App [here](https://weather-forecasting-jbjdj0oin-himatejagollis-projects.vercel.app/).


