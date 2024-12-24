# Angular Chat Client

This project serves as the client-side implementation of a real-time chat application developed during a Socket.IO laboratory course on Platzi. The server-side counterpart of this project is available in the same GitHub repository under the name `socket-server`.

## Features

### Chat Functionality
- Real-time messaging using Socket.IO.
- Interactive chat widget built with reusable components.
- Dynamic message rendering with support for different types (e.g., text, images).
- Responsive SCSS styling for a consistent user experience.
- Timestamp formatting for messages using custom Angular pipes.
- Services for managing socket communication (`RealTimeService`) and user state (`UsersService`).

### User Authentication
- Basic authentication system with username input.
- Route protection using `userGuard` to restrict access to authenticated users.
- Persistent user data storage using the `StorageService`.
- Login and home templates with routing configurations.

### Environment Setup
- Configured for multiple environments with file replacements.
- Analytics setup integrated in `angular.json`.

## Installation

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Angular CLI](https://angular.io/cli)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```
2. Navigate to the client project directory:
   ```bash
   cd client
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   ng serve
   ```
5. Open your browser and navigate to `http://localhost:4200`.

## Project Structure

```
client/
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── services/
│   │   ├── models/
│   │   ├── guards/
│   │   └── pipes/
│   ├── environments/
│   └── assets/
└── angular.json
```

## Development Notes

- The project initially upgraded from Angular v15 to v17 for compatibility and performance improvements.
- Default Angular project template files were removed to streamline the setup.

## Server-Side Integration
The client-side application communicates with the `socket-server`, which is the server-side implementation of this chat system. Make sure to set up and run the server before starting the client for full functionality.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request if you'd like to suggest improvements or report bugs.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments
Special thanks to Platzi for providing the resources and guidance for this project.

