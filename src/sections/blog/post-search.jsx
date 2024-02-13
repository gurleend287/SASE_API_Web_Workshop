import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';

import Iconify from 'src/components/iconify';
import { Input } from '@mui/material';
import { useStateProvider } from 'src/utils/StateProvider';
import axios from 'axios';


// ----------------------------------------------------------------------

PostSearch.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function PostSearch() {
  const [searchValue, setSearchValue] = useState('');
  const [{ token }, dispatch] = useStateProvider();
  const [albums, setAlbums] = useState([]);

  async function search() {
    console.log(searchValue);

    var searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    }
    // var artistId
    console.log('https://api.spotify.com/v1/search?q=${searchValue}&type=artist', searchParameters);
    var artistID = await fetch('https://api.spotify.com/v1/search?q=${searchValue}&type=artist', searchParameters)
      .then(response => response.json())
      .then(data => { return data.artists.items[0].id })

    console.log("Artist ID is " + artistID);

    // Get request with Artist ID grab all the albums from that artist
    // var returnedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/tracks' + '?include_groups=album&market=US&limit=30', searchParameters)
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     setAlbums(data.items);
    //   });
  }
  
  return (
    // <Autocomplete
    //   sx={{ width: 280 }}
    //   autoHighlight
    //   popupIcon={null}
    //   slotProps={{
    //     paper: {
    //       sx: {
    //         width: 320,
    //         [`& .${autocompleteClasses.option}`]: {
    //           typography: 'body2',
    //         },
    //       },
    //     },
    //   }}
      // options={posts}
      // getOptionLabel={(post) => post.title}
      // isOptionEqualToValue={(option, value) => option.id === value.id}
      // renderInput={(params) => (
        // <TextField
        //   // {...params}
        //   placeholder="Search track by artist..."
        //   InputProps={{
        //     // ...params.InputProps,
        //     startAdornment: (
        //       <InputAdornment position="start">
        //         <Iconify
        //           icon="eva:search-fill"
        //           sx={{ ml: 1, width: 20, height: 20, color: 'text.disabled' }}
        //         />
        //       </InputAdornment>
        //     ),
        //   }}
        // />

        <Input
              autoFocus
              fullWidth
              disableUnderline
              placeholder="Artist Name…"
              startAdornment={
                <InputAdornment position="start">
                  <Iconify
                    icon="eva:search-fill"
                    sx={{ color: 'text.disabled', width: 20, height: 20 }}
                  />
                </InputAdornment>
              }
              sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
              onKeyDown={Event => {
                if (Event.key == "Enter") {
                  search();
                }
              }}
              onChange={Event => setSearchValue(Event.target.value)}
            />
    //   )}
    // />
  );
}
