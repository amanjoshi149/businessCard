/* eslint-disable react/prop-types */
export function EditCard({model,onClose,children}) {
    if(!model) return null;

    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            padding: "70px 30px 0px 30px",
            borderRadius: "4px",
            width: "80%",
            maxWidth: "500px",
            position: "relative",
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "17px",
              right: "30px",
              backgroundColor: "red",
              border: "none",
              color:'white',
              borderRadius:"10px",
              fontSize: "130%",
              padding:"5px 10px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
          {children}
        </div>
      </div>
    );
}