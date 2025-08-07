# Movie Search App

A responsive and elegant movie search application built with **React** and the **OMDb API**. Users can search for movies, view them in a beautiful grid layout, and click a movie card to see full details — all styled with a striking **Red + Black theme**.

---

## Demo

![Home Page Screenshot](./Demo/movieSearch1.png)  
![Movie List Screenshot](./Demo/movieSearch2.png)
![Movie Details Screenshot1](./Demo/movieSearch3.png)
![Movie Details Screenshot2](./Demo/movieSearch4.png)


---

##  Features

-  **Search Movies** by title using the OMDb API  
-  **Responsive Grid**: 3-column layout on desktop, 1-column on mobile  
-  **Movie Cards** with poster, title, year, and type  
-  **Movie Detail Page** with:
  - Poster, Title, Release Date, Genre, Runtime  
  - Plot Summary, Cast, Director, Writer  
  - Ratings from IMDb, Rotten Tomatoes, Metacritic  
-  **Modern UI** with a Red + Black color theme  
-  Smooth navigation using `react-router-dom`  

---

##  Tech Stack

- [React.js](https://reactjs.org/)  
- [React Router](https://reactrouter.com/)  
- [OMDb API](https://www.omdbapi.com/)  
- CSS (custom using Flexbox and Grid)  

---

##  Folder Structure

```
movie-search-app/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Home.js
│   │   ├── MovieList.js   
│   │   └── MovieDetail.js
│   │
│   ├── App.js
│   ├── index.css
│   └── index.js
│
├── README.md
└── package.json
```

---

##  Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/your-username/movie_search_app.git
cd movie-search-app
```

2. **Install Dependencies**

```bash
npm install
```

3. **Configure OMDb API Key**

```
OMDB_API_KEY=your_omdb_api_key_here
```

 Get your API key from: [https://www.omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx)

4. **Run the Development Server**

```bash
npm run dev
```

The app will be live at: [http://localhost:5173](http://localhost:5173)

---

##  Challenges Faced

- Handling missing poster images with default placeholders  
- Designing a responsive and aesthetic red/black UI  
- Dynamic routing for individual movie detail pages  

---

##  Acknowledgements

- [OMDb API](https://www.omdbapi.com/)  
- [React Router](https://reactrouter.com/)  
- [via.placeholder.com](https://via.placeholder.com/) – for fallback images  

---

##  License

This project is licensed under the **MIT License**.

---

## 👨 Author

**Sujilkumar**  
GitHub: [@Sujil-kumar](https://github.com/Sujil-kumar)