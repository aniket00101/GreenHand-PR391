# 🌾 GreenHand Crop Prediction Platform

Live at:- https://greenhand-pr391.onrender.com/

#
Overview:-

. GreenHand is a web-based platform designed to empower farmers with intelligent crop recommendations and pricing forecasts and accessing farm health data. 

. Leveraging machine learning and interactive visualizations, the application helps optimize agricultural decision-making through data-driven insights.
##
🔍 Key Features:-

⚫ Crop Recommendation Module:-

1) Users input soil nutrient levels (NPK), temperature, humidity, pH, and rainfall data.

2) A trained ML model (via sklearn, minmaxscaler, and standscaler) processes these inputs to predict the ideal crop to cultivate.

3) Recommendations are shown instantly on the Crop Prediction page, helping farmers make informed choices.

⚫ Crop Price Forecasting:-

1) The Crop Price Prediction section analyzes historical commodity data (from .csv files) to build a decision tree regression model for each crop (random depth).

2) The system forecasts prices for the next six and twelve months, calculating percentage changes relative to the current month.

⚫ Users can view:-

1) Top 5 gainers/losers based on forecasted percentage change.

2) Six-month forecast with interactive table and icons (gain/loss visuals).

3) Twelve-month outlook, including projected minimum & maximum prices and month-wise charts.

⚫ Interactive Charts & Visualization:-

1) Embedded Chart.js line charts display forecast trends and past price behavior.

2) The design is responsive, mobile-friendly, and visually polished using optimized CSS.

⚫ Authentication & Session Management:-

1) Pages like Crop prediction, Crop detail, MyFarm, Weather, and Feedback are accessible upon login.

2) Logout functionality clears the session and disables browser back button using JS to prevent unauthorized access.

#

🧠 Platform Uptime Strategy:-

● Hosted on services like Render, a background “keep-alive” pinger uses Python's requests library and threading to avoid idle timeouts.

● Equivalent JavaScript version can be run on Node/Express or serverless functions for uptime maintenance.


#
🔧 Technical Stack:-

● Front-end: HTML, CSS, Chart.js, minimal JavaScript for interactivity & session control.

● Back-end: Python + Flask, with routing for prediction, crop analysis, authentication.

● Machine Learning: Utilizes scikit-learn, DecisionTreeRegressor, MinMaxScaler, and StandardScaler.

● Data Processing: Pandas for CSV ingestion and historical pricing analysis.

● Database: Firebase for storing user email and password and also customer feedback.

Hosting: Screencast strategy for persistence (pinging hosted URL to prevent sleeping).

#

🧭 How It Helps Farmers
● Personalized Solutions: By analyzing local soil and climatic data, GreenHand recommends the optimal crop maximizing yield.

● Predictive Economics: Forward-looking price insights support financial planning and market strategy.

● Accessible Interface: Designed for simplicity—farmers can use it on basic internet-enabled devices.

● Holistic Info: Farm management features and weather forecasting tiles round out the ecosystem.

#

🚀 Setup & Usage Instructions
Install Dependencies

      pip install -r requirements.txt  

Library:-         
        
          includes Flask, pandas, sklearn, etc.

Data Ready:-


● Place crop .csv files under /static.

● Store model.pkl, standscaler.pkl, minmaxscaler.pkl in the root directory.

Launch Server:-

    python app.py

 #
Navigate & Use:-

● Visit /cropprediction to get crop suggestions.

● Visit /cropdetail to explore market forecasts.

● Visit /MyFarm to get your health of your farm.

● Visit /WeatherForecast to explore weather map forecasts.

● Use login/logout workflow to safeguard interactive areas.

#

Uptime Maintenance:-

If hosted on render platforms, all the daba are stored in firebase, run the provided “keep_alive” thread or JS ping script to keep the site active.

#

🚧 Future Enhancements:-

● Alerting System: Send market alerts or agronomic suggestions.

● Advanced ML Models: Test ensemble techniques (RandomForest, XGBoost) for improved accuracy.

● Mobile App Version: Match web UI for wider reach and offline data caching.

# 

👨‍🌾 Why It Matters:

GreenHand represents a significant step toward democratizing agricultural intelligence. By combining ML-driven advice with predictive market insights, it offers a practical, accessible, and cost-effective tool for small-to-medium farmers. This digital empowerment can enhance crop selection, stabilize incomes, and promote data-informed farming strategies in developing regions.

#

<h4 align="center" style="color:gold;">✨ Thank You ✨</h4> 
<h3 align="center" style="color:#e74c3c;">Created By: Aniket, Monalisha, Sarnendu, Aachal</h3>
