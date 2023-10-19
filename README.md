# Social Media Shell with Google OAuth2, MongoDB, and Passport

This is a simple social media shell application that allows users to authenticate with Google OAuth2, store user information in a MongoDB database, and use Passport for authentication. The project serves as a starting point for building a social media application with user authentication and database functionality.

## Features

- User authentication with Google OAuth2.
- User profiles with customizable user information.
- MongoDB for storing user data.
- Passport for authentication and session management.
- Basic HTML/CSS/JavaScript for the frontend.

## Prerequisites

Before getting started, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/social-media-shell.git
   cd social-media-shell
   ```

2. Install the project dependencies:

   ```bash
   npm install
   ```

3. Set up Google OAuth2 credentials:
   - Go to the [Google Developer Console](https://console.developers.google.com/).
   - Create a new project.
   - Enable the "Google+ API."
   - Create OAuth 2.0 credentials.
   - Add the credentials to the `config/passport.js` file.

4. Configure MongoDB:
   - Create a MongoDB database.
   - Update the MongoDB URL in the `config/database.js` file.

5. Start the application:

   ```bash
   npm start
   ```

6. The application should now be running at `http://localhost:3000`.

## Usage

1. Open your web browser and navigate to `http://localhost:3000`.
2. Click the "Sign in with Google" button to authenticate using Google OAuth2.
3. Once authenticated, you can customize your user profile and start using the social media shell.

## Project Structure

- `app.js`: The main application file.
- `config/`: Contains configuration files for Google OAuth2, Passport, and the MongoDB database.
- `models/`: Contains user and other data models.
- `routes/`: Defines the application's routes.
- `views/`: Contains the HTML templates and views.
- `public/`: Contains static assets like CSS and JavaScript files.

## Contributing

Feel free to contribute to this project by creating pull requests, reporting issues, or suggesting new features.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Passport.js](http://www.passportjs.org/)
- [Google OAuth2](https://developers.google.com/identity/protocols/oauth2)

---

Please make sure to replace placeholders with actual values and customize the project structure as needed. This README serves as a basic template for your social media shell project.
