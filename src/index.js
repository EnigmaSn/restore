import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app";
import ErrorBoundary from "./components/error-boundary";
import BookstoreService from "./services/bookstore-service";
import { BookstoreServiceProvider } from "./components/bookstore-service-context";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
const bookstoreService = new BookstoreService();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        {/* BookstoreServiceProvider передает сервис через Contex API */}
        <BookstoreServiceProvider value={bookstoreService}>
          <Router>
            <App />
          </Router>
        </BookstoreServiceProvider>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);
