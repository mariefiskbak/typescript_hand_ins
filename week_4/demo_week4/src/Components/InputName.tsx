import React from "react";

function InputName({setName, name}: { setName: React.Dispatch<React.SetStateAction<string>>, name: string }) {

    return (
        <div>
            <input
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    )
}

export default InputName