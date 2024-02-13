import { reducerCases } from "./Constants";

export const initialState = {
    token: null,
    userInfo: null,
    artist: null,
    tracks: [],
    topTracks: [],
    topArtists: [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case reducerCases.SET_TOKEN: {
            return {
                ...state,
                token: action.token,
            }
        }
        case reducerCases.SET_USER: {
            return {
                ...state,
                userInfo: action.userInfo,
            }
        }
        case reducerCases.SET_ARTIST: {
            return {
                ...state,
                artist: action.artist,
            }
        }
        case reducerCases.SET_TRACKS: {
            return {
                ...state,
                tracks: action.tracks,
            }
        }
        case reducerCases.SET_TOPARTISTS: {
            return {
                ...state,
                topArtists: action.topArtists,
            }
        }
        case reducerCases.SET_TOPTRACKS: {
            return {
                ...state,
                topTracks: action.topTracks,
            }
        }
        default:
            return state;
    }
}

export default reducer;