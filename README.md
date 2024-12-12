# 🗓️ Event Calendar App

Welcome to the **Event Calendar App**! 📅 This React-based application helps you manage your daily events with a user-friendly calendar interface. Add, update, or delete events for any specific date and visually track your schedule.

## ✨ Features

- **Dynamic Calendar**: A responsive and interactive calendar to navigate months and dates.  
- **Event Management**: Add, update, and delete events for any selected date.  
- **Event Highlighting**: Dates with events are highlighted with vibrant colors.  
- **Local Storage Support**: Events are saved in the browser's local storage, so you don't lose your data on refresh.  

---

## 🚀 Getting Started

Follow these steps to set up and run the app on your local machine.

### Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v16 or later recommended)  
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)  
- [Vite](https://vitejs.dev/)  

### Steps to Run Locally

1. **Clone the Repository** 🌀  
   ```bash
   git clone https://github.com/your-username/event-calendar-app.git
   cd event-calendar-app
   ```

2. **Install Dependencies** 📦  
   Using `npm`:
   ```bash
   npm install
   ```
   Or using `yarn`:
   ```bash
   yarn install
   ```

3. **Start the Development Server** ▶️  
   Using `npm`:
   ```bash
   npm run dev
   ```
   Or using `yarn`:
   ```bash
   yarn dev
   ```

4. **Access the App** 🌐  
   Open your browser and navigate to the development server link, typically:  
   ```bash
   http://localhost:5173
   ```

5. **Build for Production** 🛠️  
   To create a production build:  
   ```bash
   npm run build
   ```  
   Or using `yarn`:  
   ```bash
   yarn build
   ```

---

## 🏗️ Project Structure

```
📂 src/
├── 📁 assets/        # Static assets (images, logos, etc.)
├── 📁 components/    # Reusable React components (Calendar, EventForm, EventList)
├── 📄 App.jsx        # Main application logic
├── 📄 main.jsx       # Application entry point
├── 📄 index.css      # Global styles
```

---

## 🎨 UI Components

- **Calendar Component**: Displays the calendar interface, highlighting dates with events.  
- **Event Form**: A modal to add or update events for a selected date.  
- **Event List**: Lists all events for the selected date with edit and delete functionality.  

---

## 🛠️ Technologies Used

- ⚛️ **React**: For building the user interface  
- ⚡ **Vite**: Fast development server and bundler  
- 🎨 **Tailwind CSS**: For styling  
- 🗄️ **Local Storage**: To persist event data  

---

## 🙌 Contributions

Contributions are welcome! Feel free to fork the repository and submit a pull request.  

---

## 📜 License

This project is licensed under the MIT License.  

Enjoy managing your events! 🚀