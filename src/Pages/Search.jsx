import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import MusicCard from '../Components/MusicCard';
import {ReactComponent as LoaderGif } from '../assets/img/search.svg'

const Search = () => {
    const {playlists, search} = useSelector(state => state.musicReducer)
    const [searchResult, setSearchResult] = useState([])
    useEffect(() => {
        setSearchResult(playlists.filter((i) => (
        (i.name.toLowerCase().startsWith(search))
        ||
        (i.author_name.toLowerCase().startsWith(search))
        ||
        (i.lang && i.lang.toLowerCase().startsWith(search)) 
        )))
    }, [search, playlists])
    return (
        <Container>
            {
                (search === "" || search === null)
                ?
                <div className='Search'>
                    <div className="SearchImg">
                   <h1>Search for a song using the title or artistname</h1>
                   <LoaderGif className='loader'/>
                    </div>
                </div>
                :
                <div className="result">
                    {
                        searchResult.length === 0
                        ?
                        <div className="search-fallback">
                            No result found
                        </div>
                        :
                        
                        searchResult.map((item) => (
                        
                            <MusicCard key={item.id} music={item} />
                            
                        ))
                    }
                </div>
            }
        </Container>
    )
}
export default Search

const Container = styled.div`
     flex: 8;
    padding: 3.625em 3.43em 1.5em 3.68em;
    background-color: #F8F8F8;
    overflow-y: auto;
    .Search{
        height: 80vh;  
        padding: 10em 10em;
        text-align: center;
        @media(max-width:970px){
        padding: 0em 0em;
    }       

        .SearchImg{
            display: flex;
            flex-direction: column;
            height: 20em;
            color: #4b4b4b;
            .loader{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    .result{
        height: 80vh;
        display: grid;
        width: 100%;
        align-items: center;
        grid-template-columns: repeat(auto-fit, minmax(10.5em, 1fr));
        grid-gap: 2.8em;
        .search-fallback{
            text-align: center;
            font-size: 3em;
            font-weight: bold;
            color: #4b4b4b;
        }
    }
    
`