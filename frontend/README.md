# Movie App
This app allows you to search for your favourite films by film title

### Features
- Search for movies by title
- View movie details including poster, release date and rating

### How to Use
- Enter a movie title in the search bar and press "Enter"
- Click on a movie to view its details

### Technologies Used
- HTML
- CSS
- JavaScript
- Vue 3
- Vue Router
- Axios
- Font Awesome
- [TMDB](https://www.themoviedb.org/)

### Frontend structure
- `src`: This folder contains the source code of the project.
- `config`: This folder contains configuration files for the application.
- `helpers`: This folder contains common functions and utilities used across the application.
- `layouts`: This folder contains the layout components for the application, such as search and sidebar.
- `pages`: This folder contains the main pages of the application, such as home, movie, and search.
- `services`: This folder contains the base axios configuration for making HTTP requests.
- `router`: This folder contains the path and route configuration for the application.

### Installation
- Clone the repository
- Navigate to the project directory
- Run `npm install` to install dependencies
- Create a `.env` file and add your TMDB API key: `VITE_API_KEY=YOUR_API_KEY`
- Run `npm run dev` to start the development server
- Open your browser and navigate to `http://localhost:5173`

### Recommended IDE Setup
[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Contributing
- Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

### License
- MIT