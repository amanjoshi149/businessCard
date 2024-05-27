/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { EditCard } from "./EditCard";
import { useState } from "react";
export function Card({ data }) {
    const id = data._id;
    const [name, setname] = useState(data.name);
    const [description, setDescription] = useState(data.description);
    const [interests, setInterests] = useState(data.interests.join(","));
    const [instagram, setInstagram] = useState(data.socialMedia[0]);
    const [linkedin, setLinkedin] = useState(data.socialMedia[1]);
    const [twitter, settwitter] = useState(data.socialMedia[2]);

    async function updatecard() {
      const confirmation = window.confirm("Do you want to update the data ? ");
      if(!confirmation)
          return;
      const arrofinterest = interests.split(",");
      await fetch("http://localhost:3000/cards/updateCard", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          name,
          description,
          interests: arrofinterest,
          socialMedia: [
            instagram.length ? instagram : " ",
            linkedin.length ? linkedin : " ",
            twitter.length ? twitter : " ",
          ],
        }),
      });
      closemodel();
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
    function changelinkedin(e) {
      setLinkedin(e.target.value);
    }
    function changetwitter(e) {
      settwitter(e.target.value);
    }
    
    const [model, setModel] = useState(false);

    function showmodel() {
      setModel(true);
    }
    function closemodel(){
      setModel(false);
    }

    async function deleteItem()
    {
        const confirmation = window.confirm("Do you want to delete the item ?")
        if(confirmation)
        {
            await fetch("http://localhost:3000/cards/removeCard", {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id:id
              }),
            });
        }else{
            return;
        }
    }
  const socialarr = ["Instagram", "LinkedIn", "Twitter"];
  return (
    <div style={{ margin: "10px" }}>
      <div
        style={{
          width: "400px",
          border: "1px solid gray",
          borderRadius: "10px",
          boxShadow: "1px 3px 9px 0.4px",
          padding: "10px 20px",
        }}
      >
        <h1>{data.name}</h1>
        <p style={{ fontSize: "120%" }}>{data.description}</p>
        <h3>Interests : </h3>
        <ul>
          {data.interests.map((interest) => {
            return <li>{interest}</li>;
          })}
        </ul>
        <h3>Social Links : </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "75%",
            margin: "auto",
            marginBottom: "10px",
          }}
        >
          {data.socialMedia.map((elem, index) => {
            return (
              <a
                href={elem}
                style={{
                  textDecoration: "none",
                  color: "black",
                  border: "1px solid",
                  padding: "4px",
                  borderRadius: "10px",
                }}
              >
                {socialarr[index]}
              </a>
            );
          })}
        </div>
      </div>
      <div style={{ margin: "10px 10px" }}>
        <button
          style={{
            padding: "10px 25px",
            marginRight: "10px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "7px",
            fontSize: "110%",
          }}
          onClick={showmodel}
        >
          Edit
        </button>
        <button
          style={{
            padding: "10px 25px",
            marginRight: "10px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "7px",
            fontSize: "110%",
          }}
          onClick={deleteItem}
        >
          Delete
        </button>
      </div>
      <EditCard model={model} onClose={closemodel}>
        <div
          style={{
            width: "400px",
            margin: "auto",
            border: "1px solid",
            padding: "10px 30px 20px 30px ",
            marginBottom: "50px",
          }}
        >
          <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
            Edit this card{" "}
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "15px",
            }}
          >
            <label htmlFor="name" style={{ marginBottom: "5px" }}>
              Name:
            </label>
            <input
              id="name"
              name="name"
              type="text"
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                width: "100%",
                boxSizing: "border-box",
              }}
              value={name}
              onChange={changename}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "15px",
            }}
          >
            <label htmlFor="description" style={{ marginBottom: "5px" }}>
              Description:
            </label>
            <input
              id="description"
              name="description"
              type="text"
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                width: "100%",
                boxSizing: "border-box",
              }}
              value={description}
              onChange={changedescription}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "15px",
            }}
          >
            <label htmlFor="interests" style={{ marginBottom: "5px" }}>
              Your Interests (Comma Separated):
            </label>
            <textarea
              id="interests"
              name="interests"
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                width: "100%",
                boxSizing: "border-box",
                resize: "vertical",
              }}
              value={interests}
              onChange={changeinterests}
            ></textarea>
          </div>
          <div style={{ marginTop: "20px" }}>
            <h3 style={{ marginBottom: "10px", textAlign: "center" }}>
              Social Links:
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "15px",
              }}
            >
              <label htmlFor="instagram" style={{ marginBottom: "5px" }}>
                Instagram:
              </label>
              <input
                id="instagram"
                name="instagram"
                type="text"
                style={{
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  width: "100%",
                  boxSizing: "border-box",
                }}
                value={instagram}
                onChange={changeinstagram}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "15px",
              }}
            >
              <label htmlFor="linkedin" style={{ marginBottom: "5px" }}>
                LinkedIn:
              </label>
              <input
                id="linkedin"
                name="linkedin"
                type="text"
                style={{
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  width: "100%",
                  boxSizing: "border-box",
                }}
                value={linkedin}
                onChange={changelinkedin}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "15px",
              }}
            >
              <label htmlFor="twitter" style={{ marginBottom: "5px" }}>
                Twitter:
              </label>
              <input
                id="twitter"
                name="twitter"
                type="text"
                style={{
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  width: "100%",
                  boxSizing: "border-box",
                }}
                value={twitter}
                onChange={changetwitter}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <button
              style={{
                marginTop: 10,
                padding: "10px 15px",
                color: "white",
                fontSize: "110%",
                border: "none",
                borderRadius: "7px",
                backgroundColor: "blue",
              }}
              onClick={updatecard}
            >
              Update Card
            </button>
          </div>
        </div>
      </EditCard>
    </div>
  );
}
