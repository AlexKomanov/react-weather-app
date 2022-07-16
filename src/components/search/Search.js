import React, {useState} from 'react';
import {AsyncPaginate} from "react-select-async-paginate";
import {GEO_API_URL, geoAPIOptions} from "../../api";

const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null)

    const loadOptions = (inputValue) => {
        return fetch(`${GEO_API_URL}/cities?minPopulation=500000&namePrefix=${inputValue}`, geoAPIOptions)
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data.map(city => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.country}`,
                        }
                    })
                }
            })
            .catch(err => console.error(err));
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }


    return (
        <div>
            <AsyncPaginate
                placeholder="Search for city"
                debounceTimeout={600}
                value={search}
                onChange={handleOnChange}
                loadOptions={loadOptions}
            />
        </div>
    );
};

export default Search;