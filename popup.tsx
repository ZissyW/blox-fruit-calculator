import "./popup.css"

function IndexPopup() {
  return (
    <div
      style={{
        width: 768,
        height: 600,
        position: "relative"
      }}>
      <iframe
        src="https://bloxfruitscalculator.org/"
        title="Blox Fruits Value Calculator"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={{ width: "100%", height: "100%", borderWidth: 0 }}
      />
    </div>
  )
}

export default IndexPopup
