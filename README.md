# FLIXERDB

This is a movie database project that was inspired a design by HNG. The design was provided by HNG internship. I used Create react app to run it and it was styled using tailwind css while the more general designs are in the index.css file.
Data used for this project were gotten from TMDB API

I started this project by creating 3 custom react hooks.

- useFetchMovieDb
- useMovie and
- useFetch 

## useFetchMovieDb.js

This Hook accepts an endpoint and query. The endpoint fetches data for both movie and series using the TMDB API. the endpoint can either be /discover or /popular or any endpoint depending on the particular data one wants to fetch from TMDB.

```Javascript

import { useState, useEffect } from 'react';

export function useFetchMovieDb(endpoint, query) {

  useEffect(() => {
    const controller = new AbortController();

    const movieCompany = async () => {
      setIsLoading(true);
      try {
        const responses = await Promise.all(
          types.map(type =>
            fetch(
              `https://api.themoviedb.org/3/${endpoint}/${type}?api_key=${API_KEY}${query}`,
              { signal: controller.signal }
            )
          )
        );
        const data = await Promise.all(
          responses.map(res => {
            if (!res.ok) {
              throw new Error(res.statusText);
            }
            return res.json();
          })
        );

        setIsLoading(false);
        setData(data);
        setError(null);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('the fetch was aborted');
        } else {
          console.log(err);
          setIsLoading(false);
          setError(err);
        }
      }
    };
    movieCompany();
    return () => {
      controller.abort();
    };
  }, [endpoint]);

  return { data, isLoading, error, API_KEY, types };
}

```

## useMovie

This hook uses the /discover endpoint to fetch movie and tv series from TMDB. It accepts a query which cn be use to sort the movie or tv series base on certain criteria
After fetching each movie the hook gets the id of each movie and fetches the specific data of each movie which contain details that may not be gotten from the /discover endpoint.
The hook also adds a media type property to each movie or Tv serie to enable easy rendering of specific data in dom.
finally this hook filters the tv and movie and adds them to an array which can be used to if a user needs data for just the movie or the Tv series.

```JavaScript
 const fetchDetails = async () => {
        const urls = allId.map(
          ({ id, type }) =>
            `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&append_to_response=videos${query}`
        );

        try {
          setMediaLoading(true);
          const responses = await Promise.all(urls.map(url => fetch(url)));
          const details = await Promise.all(
            responses.map(res => {
              if (!res.ok) throw new Error(res.statusText);
              return res.json();
            })
          );
          setMediaLoading(false);
          setMediaError(null);
          const combinedMedia = details.map((data, i) => ({
            ...data,
            media_type: allId[i].type,
          }));
          setMedia(combinedMedia);
        } catch (err) {
          setMediaLoading(false);
          setMediaError(err);
          console.log(err);
        }
      };
      fetchDetails();


```

