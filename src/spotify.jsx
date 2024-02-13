import { useEffect } from "react";
import axios from "axios";
import { useStateProvider } from "./utils/StateProvider";
import { reducerCases } from "./utils/Constants";
import Router from "./routes/sections";
import ThemeProvider from "./theme";

export default function Spotify() {
    const [{ token }, dispatch] = useStateProvider();

    useEffect(() => {
        const getUserInfo = async () => {
            const { data } = await axios.get("https://api.spotify.com/v1/me", {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
            const usersInfo = {
                userId: data.id,
                images: data.images,
                name: data.display_name,
                email: data.email,
            };
            console.log(usersInfo);
            dispatch({ type: reducerCases.SET_USER, userInfo: usersInfo });
        };
        getUserInfo();
    }, [dispatch, token]);
    

    useEffect(() => {
        const getTopArtistData = async () => {
            const response = await axios.get(
                "https://api.spotify.com/v1/me/top/artists?limit=20&offset=0",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            const { items } = response.data;
            const artists = items.map(({ images, name, id }) => ({ images, name, id }));
            console.log(artists);
            dispatch({ type: reducerCases.SET_TOPARTISTS, topArtists: artists });
        };
        getTopArtistData();
    }, [token, dispatch]);

    // write your top tracks api here

    return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}