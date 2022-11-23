const API_KEY=process.env.API_KEY

export default{
    fetchTrending:{
        title:"Trending",
        url:`/trending/all/week?week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated:{
        title:"Top Rated",
        url:`/trending/all/week?week?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies:{
        title:"Action",
        url:`/trending/all/week?week?api_key=${API_KEY}&language=en-US`
    },
    fetchComedyMovies:{
        title:"Comedy",
        url:`/trending/all/week?week?api_key=${API_KEY}&language=en-US`
    },
    fetchHorrorMovies:{
        title:"Horror",
        url:`/trending/all/week?week?api_key=${API_KEY}&language=en-US`
    },
    fetchTrending:{
        title:"Trending",
        url:`/trending/all/week?week?api_key=${API_KEY}&language=en-US`
    },
    fetchRomanceMovies:{
        title:"Romance",
        url:`/trending/all/week?week?api_key=${API_KEY}&language=en-US`
    },
    fetchMysteryMovies:{
        title:"Mystery",
        url:`/trending/all/week?week?api_key=${API_KEY}&language=en-US`
    },
    fetchSciFiMovies:{
        title:"SciFi",
        url:`/trending/all/week?week?api_key=${API_KEY}&language=en-US`
    },
    fetchWesternMovies:{
        title:"Western",
        url:`/trending/all/week?week?api_key=${API_KEY}&language=en-US`
    },
    fetchAnimationMovies:{
        title:"Animation",
        url:`/trending/all/week?week?api_key=${API_KEY}&language=en-US`
    },
    fetchTVMovies:{
        title:"TV Movie",
        url:`/trending/all/week?week?api_key=${API_KEY}&language=en-US`
    },
}