# NASA Space Apps 2024: Leveraging Earth Observation Data for Informed Agricultural Decision-Making

### WebApp: Farm Management System for Smarter Farming Decisions

---

## 🚀 Overview

This web application, created by **Team Infinite_Loopers**, was developed as part of the NASA Space Apps 2024 Challenge, "Leveraging Earth Observation Data for Informed Agricultural Decision-Making." Our app is designed to support farmers in managing their fields efficiently, making data-driven decisions with the help of Earth observation data.

By integrating climate data, weather forecasts, and crop progress tracking, this tool equips farmers with the necessary information to make better-informed agricultural decisions, ultimately improving yields and minimizing risks.

---

## 🧑‍🌾 Intended Users

This app is designed primarily for **farmers** who want to leverage real-time climate data and track the health and progress of their crops. It’s tailored to help both small-scale and large-scale farmers manage their fields effectively.

---

## 🌟 Key Features

1. **🌾 Crop Recommender**
   - Suggests the best crops to grow based on climate data specific to the user's field.
   - **Crop Embeddings**: We've created a set of embeddings for various crops, representing the ideal conditions for each. These embeddings are compared against real-time weather and climate data from the farmer’s field, ensuring the best recommendations based on current environmental factors.

2. **🗺️ Marker Creation**
   - Farmers can create **markers** on a map to note down essential information.
   - Markers can be used to set reminders, create warnings, store relevant data, or highlight specific areas of the field.
   - Example use cases: noting areas requiring irrigation, pest management, or field observations.

3. **📊 Weather & Climate Dashboard**
   - Powered by the **Meteomatics API**, farmers can access comprehensive weather and climate data.
   - Provides real-time and historical data on rainfall, temperature, humidity, and more.
   - Users can explore and analyze this data to anticipate weather changes, ensuring timely field interventions.

4. **👤 Accounts and Field Management**
   - New users create an account and input the coordinates of their field(s).
   - Fields and custom data (like markers) are saved in a **Supabase database**, allowing the user to access their personalized data when they log back in.
   - No need to re-enter field information or previously stored markers after logging in.

5. **📈 Crop Progress Overview**
   - Farmers can track the progress of their crops over time, with detailed insights into how their plants are growing.
   - Data-driven recommendations are provided based on crop health and environmental conditions.

6. **🌍 Heatmap for Moisture and Humidity**
   - Visualize **humidity** and **moisture** levels across different parts of the field using an interactive heatmap.
   - Helps identify areas with insufficient moisture and optimize irrigation management.

---

## 🔧 Tech Stack

- **Frontend**: TypeScript, React.js
- **Backend**: Python, Flask
- **Database**: Supabase (PostgreSQL)
- **APIs**:
  - **Meteomatics API**: for weather and climate data
  - **MapTiler API**: for satellite imagery
- **Map & Geospatial Tools**:
  - **OpenStreetMaps** for street maps
  - **Leaflet.js** for interactive map rendering and marker creation

---

## 💾 Setup & Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/farm-management-system.git
   ```

2. Navigate into the project directory:
   ```bash
   cd farm-management-system
   ```

3. Install the required dependencies:
   - For the **Frontend** (React):
     ```bash
     cd frontend
     npm install
     ```
   - For the **Backend** (Python/Flask):
     ```bash
     cd backend
     pip install -r requirements.txt
     ```

4. Set up environment variables:
   - Create a `.env` file in the root directory of the backend.
   - Add the following variables:
     ```
     METEOMATICS_API_KEY=your_meteomatics_api_key
     SUPABASE_URL=your_supabase_url
     SUPABASE_ANON_KEY=your_supabase_anon_key
     ```

5. Run the application:
   - For the **Backend**:
     ```bash
     cd backend
     flask run
     ```
   - For the **Frontend**:
     ```bash
     cd frontend
     npm start
     ```

6. Open your browser and visit:
   ```
   http://localhost:3000
   ```

---

## 🌐 Usage

1. **Create an account**: Sign up and input your field coordinates.
2. **Set markers**: Place markers on your map for reminders or notes.
3. **Use the dashboard**: Access climate data and explore trends.
4. **View crop progress**: Track your crops and analyze growth patterns.
5. **Utilize the heatmap**: Visualize moisture and humidity data in your fields.

---

## 📅 Future Enhancements

- Integration with drone or satellite imagery to provide advanced insights into crop health.
- Soil quality analysis features for better crop recommendations.
- AI-based predictive models to forecast crop yields based on historical data.

---

## 🌍 Contribution

We welcome contributions to improve this project! Please submit a pull request or open an issue to suggest changes.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🚀 Team Infinite_Loopers

- **Developer**: Your Name
- **Designer**: Your Teammate
- **Data Specialist**: Another Teammate

Thank you for checking out our submission! 🌾
