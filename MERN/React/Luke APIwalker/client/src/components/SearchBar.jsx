import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';

const SearchBar = () => {
    const [targetType, setTargetType] = useState("planets");
    const [idNum, setIdNum] = useState(0);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setTargetType(e.target.targetType.value)
        if (targetType === 'planets') {
            navigate(`/planets/${idNum}`)
        }
        else if (targetType === 'people') {
            navigate(`/people/${idNum}`)
        }
        else {
            console.log('not working')
        }
    }

    return (
        <div>
            <hr />
            <hr />
            <form onSubmit={handleSubmit}>
                <label htmlFor='targetType'>Search For:</label><br />
                <select name='targetType' id='targetType' onChange={(e) => {
                    setTargetType(e.target.value)
                }}>
                    <option value="planets" default>Planets</option>
                    <option value="people">People</option>
                </select><br />
                <label htmlFor='idNum'>ID: </label><br />
                <input name="idNum" type="number" onChange={(e) => {
                    setIdNum(e.target.value)
                }}/><br />
                <button>Search</button>
            </form>
            <hr />
            <hr />
        </div>
    )
}

export default SearchBar