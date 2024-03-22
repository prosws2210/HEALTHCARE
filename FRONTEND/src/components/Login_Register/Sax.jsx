import React from 'react'
import {supabase} from "../../createClient";

const Sax = () => {

    const handleSubmit = async () => {
        const {data, error} = await supabase.from('User').select('*')
        console.log(data)
    }

    const Register = async () => {
        const {data, error} = await supabase.
        from('User')
        .insert([
            {Name:"sws"}
        ])
        console.log(data)
    }

    return (
        <div>
            <button onClick={handleSubmit}>click</button>
            <button onClick={Register}>Reg</button>
        </div>
    )
}

export default Sax