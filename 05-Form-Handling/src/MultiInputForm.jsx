import { useState } from "react"


function MultiInputForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: ""
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Multiple Input Form</h2>
 
                <input type="text" name="name" placeholder="Name" value={formData.name} onClick={handleChange}/>
                <br />

                <input type="email" name="email" placeholder="Email" value={formData.email} onClick={handleChange}/>
                <br />

                <input type="number" name="age" placeholder="Age" value={formData.age} onClick={handleChange}/>
                <br />

                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default MultiInputForm
