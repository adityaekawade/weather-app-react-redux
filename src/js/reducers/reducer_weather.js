/**
 * Created by Aditya Ekawade on 5/14/2017.
 */


export default function (state=[], action) {
    switch (action.type) {
        case "FETCH_WEATHER":
            return[action.payload.data, ...state];
        break;
        case "FETCH_CURRENT_WEATHER":
            return[action.payload.data, ...state];
        break;
    }
    return state;
}


