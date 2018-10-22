import axios from 'axios';
import _ from 'lodash';
import { REACT_APP_DEEZ_API } from 'react-native-dotenv';
import {AsyncStorage} from 'react-native';

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

export const storeData = async (key, value) => {

    const stringifyValue = JSON.stringify(value);
    try {
        await AsyncStorage.setItem(key, stringifyValue);
    } catch (error) {
        // Error saving data
    }
};

export const retrieveData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            // We have data!!
            return JSON.parse(value)
        }
    } catch (error) {
        // Error retrieving data
    }
};


export const clearStorage = async () => {
        try{
            await AsyncStorage.clear();
            return true;

        }
        catch(error){

        }


};