const Contact = () => {
    return (
        <div className="text-center">
            <h1 className="text-3xl m-3 p-3">Contact</h1>
            <input type="text" className="border border-black rounded-xl p-3" placeholder="name"></input>
            <input type="text" className="border border-black ml-3 rounded-xl p-3" placeholder="message"></input>
            <button className="border border-gray-700 text-white ml-3 rounded-xl p-3 bg-gray-700">Submit</button>
        </div>
    )
}

export default Contact;