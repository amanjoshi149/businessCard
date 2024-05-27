import { useState } from "react";
export function CreateCard() {

    const [name, setname] = useState("");
    const [description, setDescription] = useState("");
    const [interests, setInterests] = useState("");
    const [instagram, setInstagram] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [twitter, settwitter] = useState("");


    async function addnewcard() {
        const arrofinterest = interests.split(",");
        await fetch("http://localhost:3000/cards/addCard", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            description,
            interests: arrofinterest,
            socialMedia: [(instagram.length ? instagram : " "),(linkedin.length ? linkedin : " "),(twitter.length ? twitter : " ")]
          }),
        });
        setname("");
        setDescription("");
        setInterests("");
        setInstagram("");
        setLinkedin("");
        settwitter("");
    }

    function changename(e) {
        setname(e.target.value);
    }
    function changedescription(e) {
        setDescription(e.target.value);
    }
    function changeinterests(e) {
        setInterests(e.target.value);
    }
    function changeinstagram(e) {
        setInstagram(e.target.value);
    }
    function changelinkedin(e){
        setLinkedin(e.target.value);
    }
    function changetwitter(e)
    {
        settwitter(e.target.value);
    }

    return <div style={{width:"400px",margin:"auto" , border:"1px solid", padding:"10px 30px 20px 30px ", marginBottom:"50px"}}>
        <h1 style={{textAlign:"center", marginBottom:"40px"}}>Create a Business Card</h1>
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
                <label htmlFor="name" style={{ marginBottom: '5px' }}>Name:</label>
                <input id="name" name="name" type="text" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', width: '100%', boxSizing: 'border-box' }} value={name} onChange={changename}/>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
                <label htmlFor="description" style={{ marginBottom: '5px' }}>Description:</label>
                <input id="description" name="description" type="text" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', width: '100%', boxSizing: 'border-box' }}  value={description} onChange={changedescription}/>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
                <label htmlFor="interests" style={{ marginBottom: '5px' }}>Your Interests (Comma Separated):</label>
                <textarea id="interests" name="interests" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', width: '100%', boxSizing: 'border-box', resize: 'vertical' }} value={interests} onChange={changeinterests}></textarea>
            </div>
            <div style={{ marginTop: '20px' }}>
                <h3 style={{ marginBottom: '10px',textAlign:"center" }}>Social Links:</h3>
                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
                    <label htmlFor="instagram" style={{ marginBottom: '5px' }}>Instagram:</label>
                    <input id="instagram" name="instagram" type="text" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', width: '100%', boxSizing: 'border-box' }} value={instagram} onChange={changeinstagram}/>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
                    <label htmlFor="linkedin" style={{ marginBottom: '5px' }}>LinkedIn:</label>
                    <input id="linkedin" name="linkedin" type="text" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', width: '100%', boxSizing: 'border-box' }} value={linkedin} onChange={changelinkedin}/>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
                    <label htmlFor="twitter" style={{ marginBottom: '5px' }}>Twitter:</label>
                    <input id="twitter" name="twitter" type="text" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', width: '100%', boxSizing: 'border-box' }} value={twitter} onChange={changetwitter}/>
                </div>
            </div>
            <div style={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"flex-end"
            }}>
                <button style={{
                    marginTop:10,
                    padding:"10px 15px",
                    color:"white",
                    fontSize:"110%",
                    border:"none",
                    borderRadius:"7px",
                    backgroundColor:"green"
                }} onClick={addnewcard}>Create Card</button>
            </div>
    </div>
}