import axios from 'axios';
import _ from 'lodash';
import { REACT_APP_DEEZ_API } from 'react-native-dotenv';

//ApiClient.init(REACT_APP_DEEZ_API);

const API_KEY = REACT_APP_DEEZ_API;

const axiosInstance = axios.create({
    baseURL: 'https://deezerdevs-deezer.p.mashape.com/',
    timeout: 10000,
    headers: {'X-Mashape-Key': API_KEY}
});

export const getAlbum = (albumId) => {

    return axiosInstance.get(`album/${albumId}`).then((response) => {
        const theAlbum = response.data.tracks.data;
        return theAlbum;
    });
};

export const searchTracks = (singerName) => {

    return axiosInstance.get(`search?q=${singerName}`).then((response) => {
        const albums = response.data.data.map((item) => item.album);
        const uniqueAlbums = _.uniqBy(albums, 'title');
        return uniqueAlbums;
    });
};
