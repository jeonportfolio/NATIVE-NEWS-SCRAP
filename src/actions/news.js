export const GET_NEWS_LIST_REQUEST = 'GET_NEWS_LIST_REQUEST'
export const GET_NEWS_LIST_SUCCESS = 'GET_NEWS_LIST_SUCCESS'
export const GET_NEWS_LIST_FAILURE = 'GET_NEWS_LIST_FAILURE'

export const getNewsList = (query) => (dispatch) => {
    dispatch({type:GET_NEWS_LIST_REQUEST});


    //Jz5uWrkJGG8Lp4JfDQkU
    //BZyNQ3UGXi
    // setTimeout(() => {
        // dispatch({type:GET_NEWS_LIST_SUCCESS})
    // },2000);

    fetch(`https://openapi.naver.com/v1/search/news.json?query=${decodeURIComponent('TEST')}`,
    {
        headers:{
            'X-Naver-Client-Id': 'Jz5uWrkJGG8Lp4JfDQkU',
            'X-Naver-Client-Secret': 'BZyNQ3UGXi'
        }
    })
    .then ((result) => {
        return result.json();
    })

    .then ((result) => {
        dispatch({type:GET_NEWS_LIST_SUCCESS, result})
    })
    .catch ((ex) => {
        dispatch({type:GET_NEWS_LIST_FAILURE,ex})
    })
}