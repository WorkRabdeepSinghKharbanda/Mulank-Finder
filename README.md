# Mulank Finder

Mulank Finder is a React + TypeScript application built with Vite. It calculates the Mulank (numerology number) of a person based on their name and birth date.

## Features

- Calculate Mulank based on the sum of the digits in the birth date.
- Derive numerological values from the name using predefined mappings.
- User-friendly interface for inputting name and birth date.
- Real-time calculation and display of results.

## How It Works

1. **Name Calculation**: Each letter in the name is assigned a numeric value based on numerology principles. The sum of these values is reduced to a single digit.
2. **Birth Date Calculation**: The digits in the birth date are summed and reduced to a single digit.
3. **Final Mulank**: The results from the name and birth date are combined to determine the Mulank.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Mulank-Finder
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open the application in your browser at `http://localhost:3000`.

## Usage

1. Enter your full name in the input field.
2. Provide your birth date in the specified format (e.g., YYYY-MM-DD).
3. Click the "Calculate" button to view your Mulank.

The site is deployed at [Mulank Finder](https://mulank-finder.netlify.app/).
