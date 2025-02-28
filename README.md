# Soar Financial Dashboard

This project is a React.js-based financial dashboard designed to display user information, card details, transaction history, and various financial charts.

## Technical Requirements

This project fulfills the following technical requirements:

1.  **Frameworks/Libraries:**
    * **React.js:** Used as the primary framework for the front end.
    * **TailwindCSS:** Employed for styling the components.
    * **React Router:** For navigation between Dashboard and Settings pages.
    * **Chart.js:** Used for rendering financial charts.
    * **React-chartjs-2:** React wrapper for Chart.js.

2.  **API Integration:**
    * Dummy API endpoints have been mocked to fetch user information, card details, transaction history, and chart data. Custom React hooks were used to simulate API calls and manage data fetching.

3.  **Routing:**
    * React Router is implemented to enable navigation between the "Dashboard" and "Settings" pages.

4.  **Charting Library:**
    * Chart.js along with react-chartjs-2 is used for rendering the line charts and the pie chart.

## Getting Started

Follow these steps to run the React application locally:

### Prerequisites

* Node.js (>=18.0.0)
* npm or yarn

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/khayargoli/fendtest.git
    cd fendtest
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Application

1.  **Start the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

2.  **Open your browser:**

    * The application will be available at `http://localhost:5173` (or the port specified by Vite).

### Building for Production

1.  **Build the application:**

    ```bash
    npm run build
    # or
    yarn build
    ```
