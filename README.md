# SocialLite

## Description

SocialLite is a versatile social networking platform that enables users to connect, share, and engage. It provides seamless authentication via Google OAuth2, stores user data in MongoDB, and manages user authentication with Passport. Additionally, SocialLite empowers users to create, read, update, and delete (CRUD) posts. The responsive frontend, powered by Handlebars, is enriched with Materialize CSS for an appealing visual experience, complemented by Font Awesome icons for intuitive navigation and interaction.

## Features

- Google OAuth2 authentication for users.
- User profiles with customizable information.
- MongoDB for user data and post storage.
- Passport for robust authentication and session management.
- Comprehensive CRUD operations for posts: Create, Read, Update, and Delete.
- A responsive frontend that harnesses Handlebars for dynamic content rendering.
- Enhanced user experience with Materialize CSS styling.
- Intuitive navigation and visual cues with Font Awesome icons.
- Basic HTML/CSS/JavaScript for the frontend.

## Prerequisites

Ensure you have the following software installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/social-lite.git
   cd social-lite
   ```

2. Install the project dependencies:

   ```bash
   npm install
   ```

3. Set up Google OAuth2 credentials:
   - Visit the [Google Developer Console](https://console.developers.google.com/).
   - Create a new project.
   - Enable the "Google+ API."
   - Configure OAuth 2.0 credentials.
   - Add the credentials to the `config/passport.js` file.

4. Configure MongoDB:
   - Create a MongoDB database.
   - Update the MongoDB URL in the `config/database.js` file.

5. Start the application:

   ```bash
   npm start
   ```

6. Access the application at `http://localhost:3000`.

## Usage

1. Open a web browser and visit `http://localhost:3000`.
2. Authenticate with Google OAuth2 by clicking the "Sign in with Google" button.
3. After successful authentication, personalize your user profile, create posts with text and images, and manage your posts using the CRUD functionalities.

## Project Structure

- `app.js`: The central application file.
- `config/`: Configuration files for Google OAuth2, Passport, and MongoDB.
- `models/`: Data models for users and posts.
- `routes/`: Routing definitions for the application.
- `views/`: Handlebars templates for user profiles, posts, and other views.
- `public/`: Static assets, including CSS and JavaScript files with Materialize CSS styling.
- `helpers/`: Handelbars helpers.
- `middleware/`: Checks to see if user is authentecate.

## CRUD Operations

1. **Create a Post:** Users can compose new posts, complete with text and optional images.
2. **Read Posts:** Users can browse through their posts on the homepage.
3. **Update a Post:** Users have the capability to edit the content of an existing post.
4. **Delete a Post:** Users can remove any post they've created.

## Contributing

Your contributions to SocialLite are welcome. Feel free to submit pull requests, report issues, or propose new features.

## License

SocialLite is open-source and distributed under the [MIT License](LICENSE).

## Acknowledgments

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Passport.js](http://www.passportjs.org/)
- [Google OAuth2](https://developers.google.com/identity/protocols/oauth2)
- [Handlebars](https://handlebarsjs.com/)
- [Materialize CSS](https://materializecss.com/)
- [Font Awesome](https://fontawesome.com/)

---


