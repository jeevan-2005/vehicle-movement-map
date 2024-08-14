# Vehicle Movement on Map Web Application

This web application visualizes vehicle movement on a map using the Leaflet library. Users can select two points on the map to find the shortest path, with a car marker animating along the route every 200ms. The app also provides route directions, a reset feature for recalculating routes, and a geolocation feature to get your current location.

## Features

- **Shortest Path Calculation**: Select two points on the map to calculate the shortest route between them.
- **Animated Car Marker**: A car marker runs along the selected route at 200ms intervals.
- **Route Directions**: Directions are provided for the selected route.
- **Route Reset**: Reset the route and select new points.
- **GeoLocation**: Get your current location and center the map.

![project-screenshot](https://github.com/user-attachments/assets/b536c79d-b253-4fd0-9054-98ef3ee68a5b)

## Tech Stack

- **React (Create React App)**: Frontend framework for building the application.
- **Leaflet**: For map integration and visualization.
- **React Leaflet**: React components for Leaflet maps.
- **leaflet-routing-machine**: For calculating routes and directions on the map.
- **HTML5**: For structuring the web pages.
- **Tailwind CSS**: For styling the application.
- **MUI Material**: For UI components and design consistency.

## Getting Started

Follow these instructions to set up the project on your local machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

## Installation

To get a local copy up and running, follow these simple steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/jeevan-2005/vehicle-movement-map.git
    ```
2. **Navigate to the project directory**:
    ```sh
    cd vechile-movement-map
    ```
3. **Install dependencies**:
    ```sh
    npm install
    ```
4. **Start the application**:
    ```sh
    npm start
    ```

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

